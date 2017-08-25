import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator, MdSelect, MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service'
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css'],
  providers: [UserService]
})
export class UsersTabComponent implements OnInit {
  displayedColumns = ['userId', 'name', 'surname', 'email', 'actions'];
  userService: UserService;
  exampleDatabase = new ExampleDatabase(this.userService);
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
  }
  
}

export interface attendanceData {
  userId: number;
  name: string;
  surname: string;
  email: string;
}


/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  public dataChange: BehaviorSubject<attendanceData[]> = new BehaviorSubject<attendanceData[]>([]);
  get data(): attendanceData[] { return this.dataChange.value; }

  //public userService: UserService;

  constructor(public userService: UserService) {
    userService.getAllUsers().subscribe(data => this.dataChange.next(data));
  }

}

export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator, private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<attendanceData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
      this._sort.mdSortChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      // const data = this._exampleDatabase.data.slice();
      const data = this.getSortedData();
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }

  getSortedData(): attendanceData[] {
    const data = this._exampleDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'userId': [propertyA, propertyB] = [a.userId, b.userId]; break;
        case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'surname': [propertyA, propertyB] = [a.surname, b.surname]; break;
        case 'email': [propertyA, propertyB] = [a.email, b.email]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}