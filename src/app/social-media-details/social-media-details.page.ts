import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-social-media-details',
  templateUrl: './social-media-details.page.html',
  styleUrls: ['./social-media-details.page.scss'],
})
export class SocialMediaDetailsPage implements OnInit {

  constructor(private router: Router, private http: HttpService, route: ActivatedRoute) {
    route.params.subscribe(val => {
    });
  }

  ngOnInit() {
    // console.log(this.parsedObj);
  }
  tbid: any = (localStorage.getItem("tbid"));



  Deliveryavailability: any = true;
  delivery_availability: any = '';
  youtubeurlCheck: any;


  // deliveryStatus(event) {
  //   console.log(event);
  //   this.Deliveryavailability = !this.Deliveryavailability;
  //   console.log(this.Deliveryavailability);
  //   if (this.Deliveryavailability == true || this.Deliveryavailability == null) {
  //     this.delivery_availability = false
  //   } else {
  //     this.delivery_availability = true
  //   }
  // }

  deliveryStatustoggle() {
    this.deliveryStatus = !this.deliveryStatus
    console.log(this.deliveryStatus);
  }


  deliveryStatus: any = false;
  urlCheck: any;
  website: any;
  instagram: any;
  whatsapp: any;
  youtube: any;
  facebook: any;
  mobilenumber: any;
  Deliveryavailabilitytoggle: any = true;
  facebookurl: boolean = false;
  googlelocation:any;

  sellerContact() {
      const contactData = {
        tbid: this.tbid,
        website: this.website,
        whatsapp: this.whatsapp,
        instagram: this.instagram,
        facebook: this.facebook,
        youtube: this.youtube,
        store_number: this.mobilenumber,
        delivery_availability: this.deliveryStatus,
        location:this.googlelocation
      }
      console.log(contactData);

      this.http.postFormData('/seller_contact', contactData).subscribe((response: any) => {
        if (response.success == "true") {
          console.log(response);
          if (this.instagram) {
            var instagramtoggle = true
          } else {
            instagramtoggle = false
          }
          if (this.website) {
            var websitetoggle = true
          } else {
            websitetoggle = false
          }
          if (this.whatsapp) {
            var whatsapptoggle = true
          } else {
            whatsapptoggle = false
          }
          if (this.facebook) {
            var facebooktoggle = true
          } else {
            facebooktoggle = false
          }
          if (this.youtube) {
            var youtubetoggle = true
          } else {
            youtubetoggle = false
          }
          if (this.mobilenumber) {
            var mobilenumbertoggle = true
          } else {
            mobilenumbertoggle = false
          }
          const obj = {
            tbid: this.tbid,
            seller_toggle:
            {
              instagram: instagramtoggle,
              website: websitetoggle,
              whatsapp: whatsapptoggle,
              facebook: facebooktoggle,
              youtube: youtubetoggle,
              contact_number: mobilenumbertoggle
            }

          }
          this.http.postFormData('/seller_toggle', obj).subscribe((response: any) => {
            if (response.success == "true") {
              console.log(response);
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
            title: 'updated successfully'
          })
          this.router.navigate(['/tabs'])
        } else {

        }

      }, (error: any) => {
        console.log(error);
      }
      );
    }


  navigateHome() {
    this.router.navigate(['/tabs'])
  }

}
