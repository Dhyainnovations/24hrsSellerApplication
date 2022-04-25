import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  public appPages = [
    { title: 'Home', url: '/tabs/tab1',icon: 'assets/icon/home.PNG'},
    { title: 'My Products', url: 'myproducts',icon: 'assets/icon/myproducts.png'},
    { title: 'Promotion', url: '/tabs/tab2', icon:'assets/icon/promotion.png' },
    { title: 'Offers', url: '/tabs/tab4',  icon:'assets/icon/offer.png' },
    { title: 'My Profile', url: '/tabs/tab5', icon:'assets/icon/myprofile.png' },
    { title: 'Support', url: '/support', icon:'assets/icon/support.png' },
    // { title: 'Log out', url: '/signinpage', icon:'assets/icon/logout.png' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];



  constructor( private _location: Location ,private router: Router, route: ActivatedRoute, private platform: Platform) {
    
    // App.addListener('backButton', () => {
    //   if (this.location == "home") {
    //     navigator['app'].exitApp();
    //     alert("exit")
    //   }
    //   else {
    //     this._location.back();
    //   }
    // });



  }
  
  ngOnInit() {
    this.activeItem = "home";
  }


 
location:any;
  listOfProduct: any;
  activeItem: any = "home";

  close() {

    this.router.navigate(['/'])
  }

  home() {
    this.activeItem = "home"
    this.router.navigate(['/tabs'])

  }

  myproducts() {
    this.activeItem = "myproducts"
    this.router.navigate(['/myproducts'])


  }

  promotion() {
    this.activeItem = "promotion"
    this.router.navigate(['/tabs/tab2'])
  }

  Offers() {
    this.activeItem = "offers"
    this.router.navigate(['/tabs/tab4'])
  }


  myprofile() {
    this.activeItem = "myprofile"
    this.router.navigate(['/tabs/tab5'])
  }

  support() {
    this.activeItem = "support"
    this.router.navigate(['/support'])
  }

  logout() {
    this.activeItem = "home"
    localStorage.clear()
    this.router.navigate(['/welcome'])
  }


}
