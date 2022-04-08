import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _location: Location) {


    App.addListener('backButton', () => {
      if (this.location == "home") {
        navigator['app'].exitApp();
        alert("exit")
      }
      else {
        alert("back")
        this._location.back();
      }
    });
  }



  ngOnInit() {
  }

  location: any
}
