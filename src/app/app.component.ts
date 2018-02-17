import { Component } from '@angular/core';
import { RestService } from './services/rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to crypto world';
  constructor(private restService:RestService) {
    this.restService.loderShow(false);
   }
}

