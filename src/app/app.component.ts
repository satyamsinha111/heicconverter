import { Component } from '@angular/core';
import heic2any from "heic2any";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   public imageUrl:string = '';

   constructor(){
    //
   }


   onUploadHeicFile(event:any){

   }
}
