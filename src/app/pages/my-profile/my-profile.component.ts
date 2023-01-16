import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  pageTitle = 'Profile';
  constructor(private location : Location) { }

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
