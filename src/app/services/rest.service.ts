import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {
  result: any;
  base_url:string;
  error:any;
  constructor(private http: HttpClient) {
    this.base_url = "http://18.218.8.160/api/v1/";
  }
  loderShow(isShow){
    if(isShow){
      document.getElementById("load").style.visibility = "visible";
    }else{
      document.getElementById("load").style.visibility = "hidden";
    }
  };
  saveData(data) {
    const uri = this.base_url+'user';
    if(data.email=''){
      data.email="no@Email.com"
    }
    const obj =JSON.stringify({

      "int_Cellnumber": data.mobile,
      "str_FullName": data.name,
      "str_Email": data.email,
      "str_Password": "root",
      "int_Sex": data.gender,
      "dt_YearofBirth": data.dob,
      "bln_AgreetoTerms": data.rgb,
      "var_RegistrationLocation_Latitude": "22.71",
      "var_RegistrationLocation_Longitude": "75.8",
      "dt_RegisterDateTime": "2015-11-27 00:00:00",
      "Int_CountryCode": "91"
    });

   //debugger;

    return this.http.post(uri, obj)
        .map(res => {
         // console.log(res);
          return res;
        },
        error => {
          this.error = error;
         // console.log(error);
          return error;
        } // error path
      );

  }
  deleteData(id) {
    const uri = this.base_url+'user/delete';
    const obj =JSON.stringify({
      "sn": id
    });
   //debugger;

   return  this.http.post(uri, obj)
    .map(res => {
      return res;
    });
  /*.subscribe(res => {
          console.log(res);
          return res;//this.getCoins();
        });*/

  }

  getCoins() {
   const uri = this.base_url+'user/cst/';;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });

  }

  editCoin(id) {
    const uri = this.base_url+'user'; + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
  updateCoin(name, price, id) {
    const uri = this.base_url+'user/' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .put(uri, obj)
      .subscribe(res => console.log('Done'));
  }
}
