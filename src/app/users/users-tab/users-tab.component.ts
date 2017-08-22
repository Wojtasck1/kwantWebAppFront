import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator, MdSelect } from '@angular/material';
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
  usersDatabase = new UsersDatabase(this.userService);
  public dataSource: UsersDataSource | any;
  public users: User[];
  user: User;
  //userService: UserService;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users.sort((a, b) => {
        return b.user_id - a.user_id;
      });
    });

  }

  ngOnInit() {
    this.dataSource = new UsersDataSource(this.usersDatabase, this.paginator);
    console.log(this.users);
    // console.log(this.dataSource);
    //this.userService.getAllUsers();
  }

  public onEditClick() {
    console.log(this.users);
  };

  public onDescClick() {
    console.log("onDescClick");
  };
  public onDeleteClick() {
    console.log("onDElClick");
  };
}

/** An example database that the data source uses to retrieve data for the table. */
export class UsersDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  get data(): User[] { return this.dataChange.value; }

  private _userService: UserService;

  // public getAllUsers() {
  //   return this._userService.getAllUsers();
  // } 

  constructor(userService: UserService) {
    userService.getAllUsers().subscribe(data => this.dataChange.next(data));
  }

  // ngOnInit() {
  //   this.getAllUsers();
  // }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class UsersDataSource extends DataSource<User> {
  constructor(private _usersDatabase: UsersDatabase, private _paginator: MdPaginator) {
    super();
  }

  connect(): Observable<User[]> {
    const displayDataChanges = [
      this._usersDatabase.dataChange,
      this._paginator.page
    ];

    return Observable.merge(...displayDataChanges).map((data, page) => {
      const clonedData = data.slice();

      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    })
  }
  disconnect() { }
  
}
