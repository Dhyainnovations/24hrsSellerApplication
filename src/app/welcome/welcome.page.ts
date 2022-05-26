import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SigninPage } from '../signin/signin.page';
import { SignupPage } from '../signup/signup.page';
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    public modalCtrl: ModalController, public platform: Platform, private router: Router
  ) {
    // this.platform.ready().then(async () => {
    //   GoogleAuth.initialize();
    // });
  }

  ngOnInit() {

  }


  guide(){
    this.router.navigate(['/ref'])
  }

  async login() {
    const modal = await this.modalCtrl.create({
      component: SigninPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }




  googleUser = "";
  userInfo = "";
  // async googleSignup() {
  //   this.googleUser = await GoogleAuth.signIn() as any;
  //   console.log('my user: ', this.googleUser);
  //   this.userInfo = this.googleUser;

  // }



  register() {
    this.router.navigate(['/signuppage'])
  }

  // public async logout(){
  //   console.log("Logout");

  // }






  
}


