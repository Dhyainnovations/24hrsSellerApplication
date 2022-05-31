import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute,) {
    route.params.subscribe(val => {
      this.PopupModel = false;
      this.sellerAllDetails();
      this.list();
    });

  }


  ngOnInit() {

  }

  //Initialization
  theFacebookToggle: any;
  theYoutubeToggle: any;
  theWhatsappToggle: any;
  theWebsiteToggle: any;
  theContactToggle: any;
  addressproof: File = null;
  idSubmitButtonProof: any = false;
  addressSubmitButtonProof: any = false;
  adressProofSize: any;
  addressProofUploadCheck: any;
  idProofSize: any;
  idProofUploadCheck: any;
  imageSize: any;
  logoUploadCheck: any;
  theInstagramToggle: any;
  userdetails: any ;
  EmailID: any = localStorage.getItem("EmailID");
  store_number: any;
  instagram: any;
  whatsapp: any;
  website: any;
  facebook: any;
  contact_number: any;
  youtube: any;
  delivery_availability_toggle: any;
  delivery_availability: any;
  InstagramToggle: any = " ";
  ContactNumberToggle: any;
  WhatsappToggle: any;
  WebsiteToggle: any;
  YoutubeToggle: any;
  FacebookToggle: any;
  WebsiteCheck: any;
  ContactNumberCheck: any;
  InstagramCheck: any;
  WhatsappCheck: any;
  YoutubeCheck: any;
  Facebookcheck: any;
  InstagramChecked: any;
  Facebookchecked: any;
  WhatsappChecked: any;
  ContactNumberChecked: any;
  Deliveryavailability: any = true;
  parsedObj: any = localStorage.getItem("tbid");
  PopupModel: any = false;
  userDetailstVisible: any = true;
  contactVisible: any = true;
  storelogo: any;
  WebsiteChecked: any;
  YoutubeChecked: any;
  deliveryStatus: any;
  location: any;
  idproof: File = null;
  idProofExist: any;
  idProofNotExist: any;
  addidProofExist: any;
  addProofNotExist: any;
  findClick: boolean = false;
  ContactNumberToggles: any;
  selectedFile: File = null;
  delivery_availability_button_disabled: any;
  delivery_availability_button_enabled: any;
  noimagefound: any;
  imagefound: any;
  addressProof: any;
  id_proof: any;
  store_category: any;
  store_categoryExist: any;
  store_categoryNotExist: any;
  mobile_Number:any;
  //Seller-get-Details
  sellerAllDetails() {
    this.http.get('/seller_details').subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.mobile_Number=response.records.mobile_number;
       

        if (response.records.store_name == "" || response.records.store_name == null) {
          this.id_proof = "Not Available"
        } else {
          this.userdetails=response.records.store_name;
        }



        if (response.records.id_proof == "" || response.records.id_proof == null) {
          this.idProofNotExist = true;
          this.idProofExist = false;
          this.id_proof = "Not Available"
        } else {
          this.id_proof = response.records.id_proof
          this.idProofExist = true;
          this.idProofNotExist = false;
        }

        if (response.records.store_category == "" || response.records.store_category == null) {
          this.store_categoryNotExist = true;
          this.store_categoryExist = false;
          this.store_category = "Not Available"
        } else {
          this.store_category = response.records.store_category
          this.store_categoryExist = true;
          this.store_categoryNotExist = false;
        }


        if (response.records.address_proof == "" || response.records.address_proof == null) {
          this.addProofNotExist = true;
          this.addidProofExist = false;
          this.addressProof = "Not Available"
        } else {
          this.addressProof = response.records.address_proof
          this.addidProofExist = true;
          this.addProofNotExist = false;
        }

        if (response.records.city == "" || response.records.city == null) {
          this.location = "Not Available"
        } else {
          this.location = response.records.city
        }

        this.contact_number = response.records.store_number;
        this.instagram = response.records.instagram;
        this.whatsapp = response.records.whatsapp;
        this.website = response.records.website;
        this.facebook = response.records.facebook;
        this.youtube = response.records.youtube;
        if (response.records.store_logo == "https://dhya.in/24Hrs/images/seller/store_logo/") {
          this.noimagefound = true;
          this.imagefound = false;
        } else {
          this.storelogo = response.records.store_logo;
          this.noimagefound = false;
          this.imagefound = true;
        }

        this.store_number = response.records.store_number;
        if (response.records.delivery_availability == "") {
          this.delivery_availability_button_disabled = true;
          this.delivery_availability_button_enabled = false;
        } else {
          this.delivery_availability_button_disabled = false;
          this.delivery_availability_button_enabled = true;
        }
        if (response.records.instagram != null && response.records.instagram != "") {
          this.InstagramChecked = true;
          this.InstagramCheck = false;
          this.InstagramToggle = true;
          this.theInstagramToggle = true;
        } else {
          this.InstagramChecked = false;
          this.InstagramCheck = true;
          this.InstagramToggle = false;
          this.theInstagramToggle = false;
        }

        console.log(this.delivery_availability);

        if (response.records.delivery_availability == "1") {
          this.deliveryStatus = true;
        } else {
          this.deliveryStatus = false;
        }


        if (this.delivery_availability == true) {
          this.delivery_availability_toggle = true;
        } else {
          this.delivery_availability_toggle = false;
        }


        if (response.records.whatsapp != null && response.records.whatsapp != "") {
          this.WhatsappChecked = true;
          this.WhatsappCheck = false;
          this.WhatsappToggle = true;
          this.theWhatsappToggle = true;
        } else {
          this.WhatsappCheck = true;
          this.WhatsappChecked = false;
          this.WhatsappToggle = false;
          this.theWhatsappToggle = false;
        }


        if (response.records.store_number != null && response.records.store_number != "") {
          this.ContactNumberCheck = false;
          this.ContactNumberChecked = true;
          this.ContactNumberToggle = true;
          this.theContactToggle = true;
        } else {
          this.ContactNumberCheck = true;
          this.ContactNumberChecked = false;
          this.ContactNumberToggle = false;
          this.theContactToggle = false;
        }


        if (response.records.website != null && response.records.website != "") {
          this.WebsiteCheck = false;
          this.WebsiteChecked = true;
          this.WebsiteToggle = true;
          this.theWebsiteToggle = true;
        } else {
          this.WebsiteCheck = true;
          this.WebsiteChecked = false;
          this.WebsiteToggle = false;
          this.theWebsiteToggle = false;
        }
        if (response.records.youtube != null && response.records.youtube != "") {
          this.YoutubeCheck = false;
          this.YoutubeChecked = true;
          this.YoutubeToggle = true;
          this.theYoutubeToggle = true;
        } else {
          this.YoutubeCheck = true;
          this.YoutubeChecked = false;
          this.YoutubeToggle = false;
          this.theYoutubeToggle = false;
        }


        if (response.records.facebook != null && response.records.facebook != "") {
          this.Facebookcheck = false;
          this.Facebookchecked = true;
          this.FacebookToggle = true;
          this.theFacebookToggle = true;
        } else {
          this.Facebookcheck = true;
          this.Facebookchecked = false;
          this.FacebookToggle = false;
          this.theFacebookToggle = false;
        }

        this.updateToggle()
      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  //Change-Delivery-Availability
  deliveryStatustoggle() {
    this.deliveryStatus = !this.deliveryStatus
    console.log(this.deliveryStatus);

  }

  //Get-Seller-Details-Based-On-Store-Name
  // DisplayUserDetails() {
  //   const obj = {
  //     store_name: this.userdetails
  //   }
  //   this.http.postFormData('/seller_store_details', obj).subscribe((response: any) => {
  //     console.log(obj);
  //     if (response.success == "true") {
  //       console.log(response);
  //       this.storelogo = response.records.store_logo;
  //       this.store_number = response.records.store_number;
  //       this.contact_number = response.records.store_number;
  //       this.instagram = response.records.instagram;
  //       this.whatsapp = response.records.whatsapp;
  //       this.website = response.records.website;
  //       this.facebook = response.records.facebook;
  //       this.youtube = response.records.youtube;
  //       this.delivery_availability = response.records.delivery_availability;
  //       this.location = response.records.city;
  //     }
  //   }, (error: any) => {
  //     console.log(error);
  //   }
  //   );
  // }


  backToprivious() {
    this.PopupModel = false;
    this.logoUploadCheck = false;
  }



  popupModelOpen() {
    // this.PopupModel = true;
    // this.userDetailstVisible = true;
    // this.contactVisible = false;
    this.router.navigate(['edit-profile'])
  }

  contactEdit() {
    this.PopupModel = true;
    this.contactVisible = true;
    this.userDetailstVisible = false;
  }

  contactview() {
    this.contactVisible = true;
    this.userDetailstVisible = false;
  }


  //Update-Social-Media-Details
  updateProfile() {
    localStorage.setItem("StoreName", this.userdetails);
    const contactData = {
      tbid: this.parsedObj,
      website: this.website,
      whatsapp: this.whatsapp,
      instagram: this.instagram,
      facebook: this.facebook,
      youtube: this.youtube,
      store_number: this.contact_number,
      delivery_availability: this.deliveryStatus
    }
    this.http.postFormData('/seller_contact', contactData).subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
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
        this.sellerAllDetails();
      } this.backToprivious()
      this.router.navigate(['/tabs/tab5'])
    }, (error: any) => {
      console.log(error);
    }
    );


  }


  //Update-Store-Logo


  //Upload-Id-Proof
  MediaFileSelected_idproof(event2) {
    this.idproof = event2.target.files[0] as File;
    var idproof = event2.target.files[0].size;
    var name  = event2.target.files[0].name;
    this.idSubmitButtonProof = true;
    if (idproof > 10485760) {
      this.idProofSize = true;
      this.idProofUploadCheck = false;
    } else {
      this.idProofSize = false;
      this.idProofUploadCheck = true;      
    }
  }


  //Upload-Address-Proof
  MediaFileSelected_addressproof(event1) {
    this.addressSubmitButtonProof = true;
    this.addressproof = event1.target.files[0] as File;
    var adressproof = event1.target.files[0].size;
    var name  = event1.target.files[0].name;
    if (adressproof > 10485760) {
      this.adressProofSize = true;
      this.addressProofUploadCheck = false;
    } else {
      this.adressProofSize = false;
      this.addressProofUploadCheck = true;
    }

  }


  //Upload-Id-Proof
  submitidProof() {
    const formdata = new FormData();
    formdata.append("tbid", this.parsedObj);
    formdata.append("id_proof", this.idproof);
    this.http.postFormData('/seller_id_proof', formdata).subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.idSubmitButtonProof = false;
        this.sellerAllDetails();
      }
    }, (error: any) => {
      console.log(error);
    }
    );

  }


  //Upload-Address-Proof
  submitaddressProof() {
    const formdata = new FormData();
    formdata.append("tbid", this.parsedObj);
    formdata.append("address_proof", this.addressproof);
    this.http.postFormData('/seller_address_proof', formdata).subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.addressSubmitButtonProof = false;
        this.sellerAllDetails();
      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }


  //Toggle-Functions



  contactToggle() {
    if (this.ContactNumberChecked == true) {
      if (this.theContactToggle == true) {
        this.theContactToggle = !this.theContactToggle;
      } else {
        this.theContactToggle = !this.theContactToggle;

      }

    } else if (this.ContactNumberChecked == false) {
      this.theContactToggle = false;
    }

    this.updateToggle();
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
  }


  instagramToggle() {
    if (this.InstagramChecked == true) {
      if (this.theInstagramToggle == true) {
        this.theInstagramToggle = !this.theInstagramToggle;
      } else {
        this.theInstagramToggle = !this.theInstagramToggle;
      }

    } else if (this.InstagramChecked == false) {
      this.theInstagramToggle = false;
    }

    this.updateToggle();
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
  }

  whatsappToggle() {
    if (this.WhatsappChecked == true) {
      if (this.theWhatsappToggle == true) {
        this.theWhatsappToggle = !this.theWhatsappToggle;
      } else {
        this.theWhatsappToggle = !this.theWhatsappToggle;
      }
    } else if (this.WhatsappChecked == false) {
      this.theWhatsappToggle = false;
    }
    this.updateToggle();
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
  }





  websiteToggle() {
    if (this.WebsiteChecked == true) {
      if (this.theWebsiteToggle == true) {
        this.theWebsiteToggle = !this.theWebsiteToggle;
      } else {
        this.theWebsiteToggle = !this.theWebsiteToggle;
      }
    } else if (this.WebsiteChecked == false) {
      this.theWebsiteToggle = false;
    }
    this.updateToggle();
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
  }


  youtubeToggle() {
    if (this.YoutubeChecked == true) {
      if (this.theYoutubeToggle == true) {
        this.theYoutubeToggle = !this.theYoutubeToggle;
      } else {
        this.theYoutubeToggle = !this.theYoutubeToggle;
      }
    } else if (this.YoutubeChecked == false) {
      this.theYoutubeToggle = false;
    }
    this.updateToggle();
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
  }




  facebookToggle() {
    if (this.Facebookchecked == true) {
      if (this.theFacebookToggle == true) {
        this.theFacebookToggle = !this.theFacebookToggle;
      } else {
        this.theFacebookToggle = !this.theFacebookToggle;
      }
    } else if (this.Facebookchecked == false) {
      this.theFacebookToggle = false;
    }
    this.updateToggle();
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
  }



  //Toggle-Status-Upload
  updateToggle() {
    var obj = {
      tbid: this.parsedObj,
      seller_toggle:

      {
        whatsapp: this.theWhatsappToggle,
        website: this.theWebsiteToggle,
        instagram: this.theInstagramToggle,
        facebook: this.theFacebookToggle,
        youtube: this.theYoutubeToggle,
        contact_number: this.theContactToggle
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

  }

  listOfCat = [];

  list() {
    this.http.get('/list_store_category',).subscribe((response: any) => {
      console.log(response);
      this.listOfCat = response.records;
    }, (error: any) => {
      console.log(error);
    }
    );
  }


  //Naviagtions
  notification() {
    this.router.navigate(['/notification'])
  }
  store_category_tbid: any;
  StoreCategorySelect(data) {
    const formdata = new FormData();
    formdata.append("category", data.storeCategory);
    this.store_category_tbid = data.storeCategory

  }

}