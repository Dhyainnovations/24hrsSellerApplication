import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  noimagefound: any;
  imagefound: any;
  location: any;;
  storelogo: any;
  store_categoryExist: any;
  store_categoryNotExist: any;
  store_category: any;
  storeName: any = localStorage.getItem("StoreName");
  user_tbid: any = localStorage.getItem("tbid");
  EmailID: any = localStorage.getItem("EmailID");

  sellerDetails: any = [];
  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute,) {
    this.sellerAllDetails();
  }

  ngOnInit() {

  }
  backToprivious() {
    this.router.navigate(['/tabs/tab5'])
  }

  mailID(data) {
    this.EmailID = data;
  }

  sellerAllDetails() {
    this.http.get('/seller_details').subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.sellerDetails = response.records;
        console.log(this.sellerDetails);
        this.store_category_tbid = response.records.store_category_id;
        this.address_line_1 = response.records.address_line_1;
        this.address_line_2 = response.records.address_line_2;
        this.citys = response.records.city;
        this.states = response.records.city;
        this.pincodes = response.records.pincode;
        if (response.records.store_category == "" || response.records.store_category == null) {
          this.store_categoryNotExist = true;
          this.store_categoryExist = false;
          this.store_category = "Not Available"
        } else {
          this.store_category = response.records.store_category
          this.store_categoryExist = true;
          this.store_categoryNotExist = false;
        }
        if (response.records.city == "" || response.records.city == null) {
          this.location = "Not Available"
        } else {
          this.location = response.records.city
        }
        if (response.records.store_logo == "https://dhya.in/24Hrs/images/seller/store_logo/") {
          this.noimagefound = true;
          this.imagefound = false;
        } else {
          this.storelogo = response.records.store_logo;
          this.noimagefound = false;
          this.imagefound = true;
        }
      }
    }, (error: any) => {
      console.log(error);
    }
    );
    this.list();
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
  selectedFile: any;
  imageSize: any = false;
  logoUploadCheck: any = false;
  store_category_tbid: any;


  MediaFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    var imageSize = event.target.files[0].size;
    if (imageSize > 5242880) {
      this.imageSize = true;
      this.logoUploadCheck = false;
    } else {
      this.imageSize = false;
      this.logoUploadCheck = true;
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.storelogo = reader.result;
      }
    }

  }



  updateProfile() {
    localStorage.setItem("location", this.citys);
    localStorage.setItem("EmailID", this.EmailID);
    localStorage.setItem("StoreName", this.storeName);
    //Update-Store-Logo
    console.log(this.selectedFile);
    if (this.selectedFile == undefined) {
      this.selectedFile = "";
    }
    if (this.store_category_tbid == null) {
      this.store_category_tbid = "";
    }
    const formdata = new FormData();
    formdata.append("tbid", this.user_tbid);
    formdata.append("store_logo", this.selectedFile);
    this.http.postFormData('/seller_update_store_logo', formdata).subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
      }
    }, (error: any) => {
      console.log(error);
    }
    );
    const sellerdetailformdata = new FormData();
    sellerdetailformdata.append("tbid", this.user_tbid);
    sellerdetailformdata.append("store_address", this.storeName + "," + this.citys);
    sellerdetailformdata.append("address_line_1", this.address_line_1);
    sellerdetailformdata.append("address_line_2", this.address_line_2);
    sellerdetailformdata.append("city", this.citys);
    sellerdetailformdata.append("store_category", this.store_category_tbid);
    sellerdetailformdata.append("state", this.states);
    sellerdetailformdata.append("pincode", this.pincodes);
    sellerdetailformdata.append("email_id", this.EmailID);
    this.http.postFormData("/seller_update_profile", sellerdetailformdata).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/social-media-details'])
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  address_line_1: any;
  address_line_2: any;
  citys: any = localStorage.getItem("location");
  states: any;
  pincodes: any;
  addressline_1(data) {
    this.address_line_1 = data;
  }
  addressline_2(data) {
    this.address_line_2 = data;
  }
  city(data) {
    this.citys = data;
  }
  state(data) {
    this.states = data;
  }

  pincode(data) {
    this.pincodes = data;
  }
  StoreCategory(data) {
    this.store_category_tbid = data.category;
  }
}
