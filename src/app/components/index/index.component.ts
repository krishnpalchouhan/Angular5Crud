import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  result: any;
  deleteResult: any;

  constructor(private http: HttpClient, private service: RestService) {}

  ngOnInit() {
    this.service.loderShow(true);
    this.getCoins();

  }

  getCoins() {
    this.service.getCoins().subscribe(res => {
      this.result = res['data'];
      this.service.loderShow(false);
    });
  }
  delete(id) {
    this.service.deleteData(id).subscribe(res => {
      this.deleteResult = res['msg'];
      console.log(this.deleteResult);
      for (var i = 0; i <  this.result.length; i++)
        if ( this.result[i].sn === id) {
          this.result.splice(i, 1);
            i=this.result.length+1;
        }
    });
  }
}
