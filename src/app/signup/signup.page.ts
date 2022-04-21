import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SigninPage } from '../signin/signin.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public modalCtrl: ModalController,private router: Router, private http: HttpService,
    private toastCtrl: ToastController, public popoverController: PopoverController, private route: ActivatedRoute) {
    this.invalidAlert = false;
    this.acceptCondtion = false;


    this.route.queryParams.subscribe(queryParams => {
      this.checked = queryParams['checkbox'];


    });
  }


  ngOnInit() {
  }

  OTPVerificationStatus: any;
  checked: any = "false";
  emailid: any = '';
  sellername: any = '';
  mobilenumber: any = '';
  password: any = '';
  resendOTPseconds: any;
  AfterSixtySeconds: any = false;
  checkedSts: any = false;
  ifTenNumber: any;
  isVisible: any = false;
  emailidRes: any = false;
  usernameRes: any = false;
  mobilenumberRes: any = false;
  passwordRes: any = false;
  ifOTPSent: any;
  ValidNumber: any = false;
  isNotEmailAlert: any = false;
  isUserNameAlert: any = false;
  OneTimePassword: any;
  pwLowercaseAlert: any = false;
  pwUppercaseAlert: any = false;
  pwNumberAlert: any = false;
  pwMinimumAlert: any = false;
  invalidAlert: any = false;
  acceptCondtion: any = false;


 

  isEmailCheck() {
    this.isNotEmailAlert = false;
  }




  isEmail() {
    var expression = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var regex = new RegExp(expression);
    if (regex.test(this.emailid) == true) {
      this.isNotEmailAlert = false;
    } else {
      this.isNotEmailAlert = true;
    }
  }

  isMobileNumber() {
    this.ValidNumber = false;
  }

  mobileNumVerification() {
    console.log(this.mobilenumber);

    if (this.mobilenumber.length == 10) {
      this.ValidNumber = false;
    } else {
      this.ValidNumber = true;
    }
  }


  passwordCheck: any = false;
  isPasswordCheck() {
    this.passwordCheck = false;
  }
  passwordValidation() {
    console.log(this.password);
    var lowerCaseLetters = /[a-z]/g;
    this.passwordRes = (lowerCaseLetters.test(this.password));
    if (this.passwordRes) {
      this.passwordCheck = false
    } else {
      this.passwordCheck = true
    }
    var upperCaseLetters = /[A-Z]/g;
    this.passwordRes = (upperCaseLetters.test(this.password));

    if (this.passwordRes) {
      this.passwordCheck = false
    } else {
      this.passwordCheck = true
    }
    var numbers = /[0-9]/g;
    this.passwordRes = (numbers.test(this.password));

    if (this.passwordRes) {
      this.passwordCheck = false
    } else {
      this.passwordCheck = true
    }

    if (this.password.length >= 8) {
      this.passwordCheck = false
    } else {
      this.passwordCheck = true
    }

    return numbers.test(this.password);
  }

  username() {
    if (this.sellername!) {
      this.isUserNameAlert = false;
    } else {
      this.isUserNameAlert = true;
    }
  }
  isUSername() {
    this.isUserNameAlert = false;
  }

  acceptCondtioned: any = true;
  signup() {
    if (this.checked == false || this.checked == undefined) {
      this.acceptCondtion = true;
      this.acceptCondtioned = false;
    } else {
      this.acceptCondtion = false;
      this.acceptCondtioned = true;
    }
    this.mobileNumVerification();
    this.isEmail();
    this.passwordValidation();
    this.username();
    const userData = {
      store_name: this.sellername,
      email_id: this.emailid,
      mobile_number: this.mobilenumber,
      password: this.password
    }
    if (this.isNotEmailAlert == false && this.passwordCheck == false && this.ValidNumber == false && this.isUserNameAlert == false && this.checked == true) {
      this.http.post('/seller_register', userData).subscribe((response: any) => {
        if (response.success == "true") {
          this.passwordCheck = false
          localStorage.setItem("24hrs-user-data-Seller-Status", response.seller_status);
          localStorage.setItem("24hrs-user-data-mobile-number", this.mobilenumber);
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
          console.log(response);
          this.router.navigate(['/otp'])


          this.navigateOTPPage();
        } else if (response.message == "Email-Id Already Exist") {
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
            icon: 'error',
            title: 'Email Already Exist'
          })
        } else if (response.message == "User name Already Exist") {
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
            icon: 'error',
            title: 'Username Already Exist'
          })
        }
        else if (response.message == "Mobile Number Already Exist") {
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
            icon: 'error',
            title: 'Mobile Number Already Exist'
          })
        } else if (response.message == "Store Number Already Exist") {
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
            icon: 'error',
            title: 'Phone Number Already Exist'
          })
        }
        else if (response.message == "Store Name Already Exist") {
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
            icon: 'error',
            title: 'Phone Number Already Exist'
          })
        }

      }, (error: any) => {
        console.log(error);
      }
      );
    }
  }


  navigateOTPPage() {
    this.sellername = ''
    this.emailid = ''
    this.mobilenumber = ''
    this.password = ''
  }


  // signinPage() {
  //   this.router.navigate(['/signinpage'])
  // }


  termsAndCondition() {
    this.router.navigate(['/terms-and-condition'])
  }


  checkboxClick(e) {
    console.log(e.detail.checked);
    this.acceptCondtion = false;
    this.checked = e.detail.checked;
    this.acceptCondtioned = true;

  }

  navigateHome() {
    this.router.navigate(['/welcome'])
  }


  async dismiss() {
    await this.modalCtrl.dismiss();
    
  }

  async signinPage() {
    const modal = await this.modalCtrl.create({
      component: SigninPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }
}

