import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private platform: Platform) {
   
  }


  home(){
    localStorage.setItem("location", "home");

  }

  promotion(){
    localStorage.setItem("location", "");

  }

  product(){
    localStorage.setItem("location", "");

  }


}
