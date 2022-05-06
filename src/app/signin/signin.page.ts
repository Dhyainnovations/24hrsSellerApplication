import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OtpverificationPage } from '../forget-password/otpverification.page';
import { OtpPage } from '../otp/otp.page';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(public modalCtrl: ModalController, private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.signinemailid = "";
      this.signinpassword = "";
      this.verifyOTPValidate = false;
      this.loginstatus = localStorage.getItem("24hrs-user-data-Seller-Status")
    });
  }

  ngOnInit() {
    this.verifyOTPValidate = false;
  }




  verifynumber: any;
  loginstatus: any = ""
  signinemailid: any = '';
  signinpassword: any = '';

  async dismiss() {
    await this.modalCtrl.dismiss();

  }



  async otpPage() {
    localStorage.setItem("24hrs-user-data-mobile-number", this.verifynumber);
    const modal = await this.modalCtrl.create({
      component: OtpPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }


  async forgotPasswordPage() {
    const modal = await this.modalCtrl.create({
      component: OtpverificationPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }

  signin() {
    const Data = {
      email_id: this.signinemailid,
      password: this.signinpassword
    }
    this.http.post('/seller_login', Data).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.dismiss();
        localStorage.setItem("token", response.token)
        localStorage.setItem("tbid", response.tbid)
        localStorage.setItem("StoreName", response.store_name)
        localStorage.setItem("EmailID", response.email_id);
        localStorage.setItem("mobile_Number", response.mobile_number)

        this.http.get('/seller_details').subscribe((response: any) => {
          if (response.success == "true") {
            console.log(response);
            this.store_category_id = response.records.store_category_id
            if (response.records.store_category != null) {
              this.store_categoryCheck = false
            } else {
              this.store_categoryCheck = true;
            }
            if (response.records.id_proof != null) {
              this.idproofcheck = false
            } else {
              this.idproofcheck = true;
            }
            if (response.records.address_proof != null) {
              this.addressproofcheck = false
            } else {
              this.addressproofcheck = true;
            }
            if (this.store_categoryCheck == false && this.idproofcheck == false && this.addressproofcheck == false) {
              this.router.navigate(['/tabs'])
            } else {
              this.router.navigate(['/sellerdetailpage'])
            }
          }
        }, (error: any) => {
          console.log(error);
        }
        );


        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })


      } else if (response.message == 'INCOMPLETE DATA.') {

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'Please enter the valid email & password'
        })
      } else if (response.message == 'Your have to verify your account.') {
        this.verifyOTPValidate = true;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'You have to verify your account'
        })
      }
      else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'Invalid Login Credentials'
        })
      }
    }, (error: any) => {

      console.log(error);

    }
    );
  }

  verifyOTPValidate: any = false;

  signupPage() {
    this.dismiss();
    this.router.navigate(['/signuppage'])
  }


  navigatetoforgetpassword() {
    this.router.navigate(['/forget-password'])
  }



  store_categoryCheck: any;
  idproofcheck: any;
  store_category_id: any;
  addressproofcheck: any;



}
