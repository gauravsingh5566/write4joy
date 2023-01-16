import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  pageTitle = 'Support';
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(){
     try {
       this.location.back();
     } catch (error) {
       console.log(error);
     }
  }

}
