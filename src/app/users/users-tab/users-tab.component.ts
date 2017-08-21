import { Component, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator, MdSelect } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
 import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

// import {Component} from '@angular/core';
// import {Http, Response} from '@angular/http';
// import {DataSource} from '@angular/cdk';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent {
//  displayedColumns = ['number', 'state', 'title'];
//   exampleDatabase: ExampleHttpDatabase | null;
//   dataSource: ExampleDataSource | null;

//   constructor(http: Http) {
//     this.exampleDatabase = new ExampleHttpDatabase(http);
//     this.dataSource = new ExampleDataSource(this.exampleDatabase);
//   }
// }

// export interface MyGithubIssue {
//   number: string;
//   state: string;
//   title: string;
// }

// /** An example database that the data source uses to retrieve data for the table. */
// export class ExampleHttpDatabase {
//   private issuesUrl = 'https://api.github.com/repos/angular/material2/issues';  // URL to web API

//   getRepoIssues(): Observable<MyGithubIssue[]> {
//     return this.http.get(this.issuesUrl)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }
  
//   extractData(result: Response): MyGithubIssue[] {
//     return result.json().map(issue => {
//       return {
//         number: issue.number,
//         state: issue.state,
//         title: issue.title,
//       }
//     });
//   }

//       private handleError (error: Response | any) {
//     // In a real world app, you might use a remote logging infrastructure
//     let errMsg: string;
//     if (error instanceof Response) {
//       const body = error.json() || '';
//       const err = body.error || JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//     } else { 
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.error(errMsg);
//     return Observable.throw(errMsg);
//   }
  
//   constructor(private http: Http) {}
// }

// /**
//  * Data source to provide what data should be rendered in the table. Note that the data source
//  * can retrieve its data in any way. In this case, the data source is provided a reference
//  * to a common data base, ExampleHttpDatabase. It is not the data source's responsibility to manage
//  * the underlying data. Instead, it only needs to take the data and send the table exactly what
//  * should be rendered.
//  */
// export class ExampleDataSource extends DataSource<MyGithubIssue> {
//   constructor(private _exampleDatabase: ExampleHttpDatabase) {
//     super();
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<any[]> { 
//     return this._exampleDatabase.getRepoIssues();
//   }

//   disconnect() {}
// }



  displayedColumns = ['userId', 'name', 'surname', 'email'];
  private userService: UserService;
  usersDatabase = new UsersDatabase(this.userService);
  dataSource: UsersDataSource | any;
  users: User[]; 
  //user: User; 
  //userService: UserService;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(){//(private _userService: UserService) {
    // this._userService.getAllUsers().subscribe((users) => {
    //   this.users = users.sort((a, b) => {
    //     return b.user_id - a.user_id;
    //   });
    // });
  }

  ngOnInit() { 
    this.dataSource = new UsersDataSource( this.userService );//, this.paginator);
    // this.userService.getAllUsers();
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
  public dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  get data(): User[] { return this.dataChange.value }

  private _userService: UserService;

  private getAllUsers() {
    return this._userService.getAllUsers();
  }

  constructor(userService: UserService) {
    userService.getAllUsers().subscribe(data => this.dataChange.next(data));
   }

  ngOnInit() {
    this.getAllUsers();
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class UsersDataSource extends DataSource<User> {
  constructor(private _userService: UserService)
  {
    super();
  }

  connect(): Observable<User[]>{
    return this._userService.getAllUsers();
  }

  disconnect(){}

  //   private _userService: UserService, 
  //   private _paginator: MdPaginator) { super() }

  // connect(): Observable<User[]> { 
  //   const displayDataChanges = [
  //     this._userService.getAllUsers,
  //     this._paginator.page
  //   ];

  //   return Observable.merge(...displayDataChanges).map((data, page) => {
  //     const clonedData = data.slice();

  //     const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
  //     return data.splice(startIndex, this._paginator.pageSize);
  //   })
  // }
  // disconnect() { }
}