import { Component , Input} from '@angular/core';
import { OrderByPipe } from './../../shared/pipe/orderBy.pipe';
import { FormatPipe } from './../../shared/pipe/format.pipe';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent {

  //@Input() columns: any[];
  @Input() data: any[];
  @Input() sort: any;
  
  selectedClass(columnName): string{
    return columnName == this.sort.column ? 'sort-' + this.sort.descending : "false";
  }
  
  changeSorting(columnName): void{ 
    var sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }
  
  convertSorting(): string{
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

  rows: any[] = [
    {
      Name: 'Data 1',
      Amount: 100.23,
      Date: 1433588216000
    },
    {
      Name: 'Data 2',
      Amount: 0.875623,
      Date: 1432387616000
    },
    {
      Name: 'Data 3',
      Amount: .010123,
      Date: 1461820116000
    },
    {
      Name: 'Data 4',
      Amount: 1873.02301,
      Date: 1423128616000
    },
    {
      Name: 'Data 5',
      Amount: -93,
      Date: 1439220116000
    }
  ];
  columns: any[] = [
    {
      display: 'Column 1', //The text to display
      variable: 'Name', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'Column 2', //The text to display
      variable: 'Amount', //The name of the key that's apart of the data array
      filter: 'decimal : 1.0-2' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'Column 3', //The text to display
      variable: 'Date', //The name of the key that's apart of the data array
      filter: 'dateTime' //The type data type of the column (number, text, date, etc.)
    }
  ];
  sorting: any = {
    column: 'Name', //to match the variable of one of the columns
    descending: false
  };

}
