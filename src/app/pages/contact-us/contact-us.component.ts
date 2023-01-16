import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  pageTitle = 'Contact-Us';
  constructor(private location:Location) { }

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
