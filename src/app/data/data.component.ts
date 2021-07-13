import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  UserName: string = "Enter UserName";

  userList = [];
  data = [];

  data1: any;
  data2: any;
  data4: any;
  data3: any;

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.DataService.getData().subscribe(res => {
      console.log(res);
      this.data1 = res[0].data;
      this.data2 = res[1];
      this.data3 = res[2];
      this.data4 = res[3];
    });
  }

  onclick(myuser) {
    if (myuser.value.length > 0) {
      this.userList.push(myuser.value);
      myuser.value = "";
    }
  }

  remove(del) {
    this.userList.splice(del, 1)
  }

}

