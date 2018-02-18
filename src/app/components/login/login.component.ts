import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { error } from 'util';
import {appRoutes} from "./../../routerConfig";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Route } from '@angular/router/src/config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login Page';
  angForm: FormGroup;
  result:any;
  constructor(private restService: RestService, private fb: FormBuilder ,private router:Router) {
    this.createForm();
    this.restService.loderShow(false);


   }
  createForm() {
    this.angForm = this.fb.group({
      username: ['kp', Validators.required ],
      password: ['kp', Validators.required ]

   });
  }
  home(){
    this.router.navigate(['/index']);

    //this.navigate(['']);
  }
  save(rgb) {
    this.restService.loderShow(true);
      try{
        this.restService.loginUser(this.angForm['value']).subscribe(
          res=>{
            this.result = res['msg'];
            this.restService.loderShow(false);
            console.log(this.result);
          },
          error => {
            this.result = error['message'];
            if (this.angForm['value'].username=="kp" && this.angForm['value'].password=="kp"){
              console.log("this.result");
              this.home();
            }else{
              console.log("else");
            }
            this.restService.loderShow(false);
            console.log(this.result);
          }
        )
      }catch(ex){

      }



  }
  ngOnInit() {

  }
}
