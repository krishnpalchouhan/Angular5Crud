import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { error } from 'util';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Coin';
  angForm: FormGroup;
  result:any;
  constructor(private restService: RestService, private fb: FormBuilder) {
    this.createForm();
    this.restService.loderShow(false);
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['kp', Validators.required ],
      mobile: ['', Validators.required ],
      gender:['Female',Validators.nullValidator],
      dob:['1990-02-22',Validators.nullValidator],
      rgb:['Red',Validators.nullValidator],
      email:['',Validators.nullValidator]

   });
  }
  save(rgb) {
    this.restService.loderShow(true);
    this.angForm['value'].rgb=rgb;
      try{
        this.restService.saveData(this.angForm['value']).subscribe(
          res=>{
            this.result = res['msg'];
            this.restService.loderShow(false);
            console.log(this.result);
          },
          error => {
            this.result = error['message'];
            this.restService.loderShow(false);
            console.log(this.result);
          }
        )
        this.angForm = this.fb.group({
        name: ['', Validators.required ],
        mobile: ['', Validators.required ],
        gender:['Female',Validators.nullValidator],
        dob:['1990-02-22',Validators.nullValidator],
        rgb:['Red',Validators.nullValidator],
        email:['',Validators.nullValidator]
      })
      }catch(ex){
        alert("not Saved");
      }



  }
  ngOnInit() {
  }
}
