import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(public modalCtrl: ModalController,private router: Router, private http: HttpService,
    private toastCtrl: ToastController, private route: ActivatedRoute,) {
    this.PhoneNumber = localStorage.getItem("24hrs-user-data-mobile-number");
    this.SendOTP();
  }

  ngOnInit() {
    this.start()
  }


  intervalId = 0;
  
  otpseconds: any = "60";
  clearTimer() { clearInterval(this.intervalId); }
  start() { this.countDown(); }
  stop() {
    this.clearTimer();
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.otpseconds -= 1;
      if (this.otpseconds === 0) {
        this.clearTimer();
        this.otpseconds = 0;
      }
    }, 1000);
  }


  SellerName: any;
  PhoneNumber: any;
  GetUserDetail = {};
  OneTimePassword: any = "";
  OTPSent: any = false;


  async dismiss() {
    await this.modalCtrl.dismiss();
  }


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
  PasswordField: any;
  OTPVerificationStatus: any;
  verifyOTP() {
    const obj = {
      mobile_number: this.PhoneNumber,
      verify_otp: this.OneTimePassword
    }
    this.http.post('/seller_verify_otp', obj).subscribe((response: any) => {
      if (response.success == "true") {
        this.router.navigate(['/signinpage'])
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
    this.router.navigate(['/signinpage'])
  }


  OTPField: any = true;
  password: any;
  confirmPassword: any;


  confirmThePassword() {
    if (this.OTPVerificationStatus == true) {
      if (this.password == this.confirmPassword) {
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
          title: 'Password Updated'
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
          title: 'Password Not Updated'
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

}
