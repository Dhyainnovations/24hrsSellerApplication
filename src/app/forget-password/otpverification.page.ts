import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.page.html',
  styleUrls: ['./otpverification.page.scss'],
})
export class OtpverificationPage implements OnInit {

  constructor(public modalCtrl: ModalController,private router: Router, private http: HttpService,
    private toastCtrl: ToastController, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.OTPField = "true";

  }


  SellerName: any;
  PhoneNumber: any;
  GetUserDetail = {};
  OneTimePassword: any = "";
  OTPSent: any = false;

  ReSendOTP() {
    const obj = {
      mobile_number: this.PhoneNumber
    }
    this.http.post('/seller_get_otp', obj).subscribe((response: any) => {
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    )
  }
  sellertbid: any;
  PasswordField: any;
  OTPVerificationStatus: any;


  
  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  verifyOTP() {
    const obj = {
      mobile_number: this.PhoneNumber,
      verify_otp: this.OneTimePassword
    }
    this.http.post('/seller_verify_otp', obj).subscribe((response: any) => {
      if (response.success == "true") {
        this.sellertbid = response.tbid;
        this.OTPVerificationStatus = "true";
        this.PasswordField = true
        this.OTPField = false
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
          title: 'OTP Verified Successfully'
        })
      } else {
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
          title: 'Invalid OTP'
        })
      }

    }, (error: any) => {
      console.log(error);
    }
    )

  }


  NaviagtetoBack() {
    this.router.navigate((['/signinpage']), { queryParams: { checkbox: true } })
  }
  OTPField: any;
  password: any;
  confirmPassword: any;


  confirmThePassword() {
    if (this.OTPVerificationStatus == "true") {
    if (this.password == this.confirmPassword) {
    const obj = {
          tbid: this.sellertbid,
          confirm_password: this.password,
          password: this.confirmPassword
        }
        console.log(obj);
        
        this.http.post('/seller_forget_pwd', obj).subscribe((response: any) => {
          if (response.success == "true") {
            console.log(response);
            this.NaviagtetoBack()
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
              title: 'Password Successfully Changed'
            })
          }

        }, (error: any) => {
          console.log(error);
        }
        )
      } else {
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
          title: "Password Does'nt Match"
        })
      }
    }


  }

  ifOTPSent: any;

  isOTPsent: any;
  SendOTP() {
    setTimeout(() => {
      this.enableResendOTP();
    }, 60000)


    const obj = {
      mobile_number: this.PhoneNumber
    }
    this.http.post('/seller_get_otp', obj).subscribe((response: any) => {
      if (response.success == "true") {
        this.isOTPsent = true;
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
          title: 'OTP Sent To Your Mobile'
        })
      } else {
        this.ifOTPSent = false;
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
          title: 'Mobile Not Exist'
        })
      }

    }, (error: any) => {
      console.log(error);
    }
    )

  }

  enableResendOTP() {
    this.AfterSixtySeconds = true;
  }
  AfterSixtySeconds: any;


  invalidAlert: any;
  passwordRes: any;
  pwLowercaseAlert: any;
  pwUppercaseAlert: any;
  pwNumberAlert: any;
  pwMinimumAlert: any;
  passwordValidation(pw) {
    console.log(pw);
    this.invalidAlert = false;

    var lowerCaseLetters = /[a-z]/g;
    this.passwordRes = (lowerCaseLetters.test(pw));

    if (this.passwordRes) {
      this.pwLowercaseAlert = false
    } else {
      this.pwLowercaseAlert = true
    }


    var upperCaseLetters = /[A-Z]/g;
    this.passwordRes = (upperCaseLetters.test(pw));

    if (this.passwordRes) {
      this.pwUppercaseAlert = false
    } else {
      this.pwUppercaseAlert = true
    }

    var numbers = /[0-9]/g;
    this.passwordRes = (numbers.test(pw));

    if (this.passwordRes) {
      this.pwNumberAlert = false
    } else {
      this.pwNumberAlert = true
    }

    if (pw.length >= 8) {
      this.pwMinimumAlert = false
    } else {
      this.pwMinimumAlert = true
    }

    return numbers.test(pw);
  }

}
