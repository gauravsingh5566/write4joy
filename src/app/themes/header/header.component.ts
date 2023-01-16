import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  sideBar: any;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
     try {
       this.navbarOpen = !this.navbarOpen;
     } catch (error) {
       console.log(error);
     }
  } 

  toggleSideBar(){
     try {
       const elem = (document.getElementById('sidebar') as HTMLElement);
       this.sideBar = (document.getElementById('sidebar') as HTMLElement).style.display;
       if (this.sideBar === 'block') {
        elem.setAttribute('style', 'display: none;');
      } else {
        elem.setAttribute('style', 'display: block;');
      }
     } catch (error) {
       console.log(error);
     }
  }

}
