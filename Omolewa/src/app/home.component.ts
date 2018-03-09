import { Response, Http } from '@angular/http';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { inherits } from 'util';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
const URL = 'http://localhost:3001';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})

export class HomeComponent {
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo', method: 'post' });


  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      alert(response);
    };
  }
  
  imageList: Array<Image> = [
     {name: "new.jpg", currentRate: 0},
     {name: "7.jpg", currentRate:0} ,
    {name: "14-11.jpg", currentRate:0} ,
    {name: "14-5.jpg" , currentRate:0},
    {name: "14-6.jpg", currentRate:0},
    {name: "14-9.jpg", currentRate:0} ,
     {name: "afro.jpg", currentRate:0} ,
     {name: "box.jpg" , currentRate:0},
     {name: "shortnatural.jpg", currentRate:0} ,
     {name: "14-11.jpg" , currentRate:0},
     {name: "14-5.jpg", currentRate:0 },
     {name: "14-6.jpg" , currentRate:0},
     {name: "14-9.jpg", currentRate:0 },
    {name: "afro.jpg", currentRate:0},
     {name: "box.jpg" , currentRate:0},
     {name: "shortnatural.jpg", currentRate:0 },
     {name: "14-11.jpg" , currentRate:0},
     {name: "14-5.jpg" , currentRate:0},
     {name: "14-6.jpg", currentRate:0 },
     {name: "14-9.jpg" , currentRate:0},
     {name: "afro.jpg", currentRate:0 },
     {name: "box.jpg" , currentRate:0},
     {name: "shortnatural.jpg" , currentRate:0}
  ];

 

  constructor(private http: Http, private el: ElementRef) { }

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    console.log("iam+ " + inputEl);
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('photo', inputEl.files.item(i));
      }
      this.http
        .post(URL, formData).map((res: any) => res).subscribe(
          (success) => {
            alert(success._body);
          },
          (error) => alert(error)
        );

    }
  }
}

interface Image {
  name: string;
  currentRate: number;
}
