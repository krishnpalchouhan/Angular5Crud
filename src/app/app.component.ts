import { Component } from '@angular/core';
import { RestService } from './services/rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isClientApp:boolean;

  title = 'Welcome';
  constructor(private restService:RestService) {
    this.restService.loderShow(false);
    this.isClientApp=false;
   }
}

