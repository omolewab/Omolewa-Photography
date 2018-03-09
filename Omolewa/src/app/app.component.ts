import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { Http, Response } from '@angular/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 
  
  wHeight:string;

  constructor(private http: Http, private el: ElementRef){
    this.wHeight = window.outerHeight + "px";
  }
 

}