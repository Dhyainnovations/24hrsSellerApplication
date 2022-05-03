import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sellerdetails',
  templateUrl: './sellerdetails.page.html',
  styleUrls: ['./sellerdetails.page.scss'],
})
export class SellerdetailsPage implements OnInit {
  constructor(private router: Router, private http: HttpService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.list()
    });
  }

  ngOnInit() {
  }

  categoryList: any = [];


  selectedFile: File = null;
  selectedaddressproof: File = null;
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

  navigateHome() {
    this.router.navigate(['/social-media-details'])
  }



  userdetails: any = localStorage.getItem("tbid");
  image: any;
  idproof: File = null;
  addressproof: File = null;
  idproofimage: any;
  addressproofimage: any;
  tbid: any;
  store_name: any = localStorage.getItem("StoreName");
  addressProofUploadCheck: any = false;
  idProofUploadCheck: any = false;
  logoUploadCheck: any = false;
  imageSize: any = false;
  adressProofSize: any = false;
  idProofSize: any = false;

  MediaFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    var imageSize = event.target.files[0].size;
    if (imageSize > 5242880) {
      this.imageSize = true;
      this.logoUploadCheck = false;
    } else {
      this.imageSize = false;
      this.logoUploadCheck = true;
      this.storelogoCheck = false;
    }
  }

  MediaFileSelected_addressproof(event1) {
    this.addressproof = event1.target.files[0] as File;
    var adressproof = event1.target.files[0].size;
    if (adressproof > 10485760) {
      this.adressProofSize = true;
      this.addressProofUploadCheck = false;
    } else {
      this.adressProofSize = false;
      this.addressProofUploadCheck = true;
      this.proofCheck = false
    }

  }

  MediaFileSelected_idproof(event2) {
    this.idproof = event2.target.files[0] as File;
    var idproof = event2.target.files[0].size;
    if (idproof > 10485760) {
      this.idProofSize = true;
      this.idProofUploadCheck = false;
    } else {
      this.idProofSize = false;
      this.idProofUploadCheck = true;
      this.proofCheck = false
    }
  }
  pincode: any;
  adresscheckFalse() {
    this.addresscheck = false;
  }



  RemoveStoreNameError() {
    this.storeNameError = false;
  }

  usernameCheckFalse() {
    this.usernameCheck = false;
  }

  mobileNumbeCheck() {
    this.usernumber = false;
  }
  usernameCheck: any;
  storeNameError: any;
  addresscheck: any
  proofCheck: any;
  storelogoCheck: any;
  storecategoryCheck: any;
  usernamecheck: any;
  usernumber: any;
  onClickSubmit(data) {
    this.image = this.selectedFile;
    const formdata = new FormData();
    formdata.append("tbid", this.userdetails);
    formdata.append("store_name", this.store_name);
    formdata.append("store_address", this.store_name + "," + data.city);
    formdata.append("address_line_1", data.address_line_1);
    formdata.append("address_line_2", data.address_line_2);
    formdata.append("city", data.city);
    formdata.append("store_category", data.category);
    formdata.append("state", data.state);
    formdata.append("pincode", data.pincode);
    formdata.append("mobile_number", data.usernumber);
    formdata.append("seller_name", data.username);
    formdata.append("store_logo", this.image);
 
    const idformdata = new FormData();
    idformdata.append("tbid", this.userdetails);
    idformdata.append("id_proof", this.idproof);

    
    const addressproofform = new FormData();
    addressproofform.append("tbid", this.userdetails);
    addressproofform.append("address_proof", this.addressproof);


    if (data.username.length <= 0) {
      this.usernameCheck = true
    } else {
      this.usernameCheck = false;
    }
    if (data.usernumber.length <= 9) {
      this.usernumber = true
    } else {
      this.usernumber = false;
    }
    if (data.category <= 0) {
      this.storecategoryCheck = true;
    } else {
      this.storecategoryCheck = false;
    }


    if (this.store_name == undefined) {
      this.storeNameError = true;
    } else {
      this.storeNameError = false;
    }
    console.log(data.city.length);


    if (data.address_line_1.length <= 0 || data.address_line_2.length <= 0 || data.city.length <= 0 || data.state.length <= 0 || data.pincode.length <= 0) {
      this.addresscheck = true;
    } else {
      this.addresscheck = false;
    }



    // if (this.image == null) {
    //   this.storelogoCheck = true;
    // } else {
    //   this.storelogoCheck = false;
    // }
    if (this.addressproof == null || this.idproof == null) {
      this.proofCheck = true;
    } else {
      this.proofCheck = false;
    }

    // this.storelogoCheck == false &&
    if (this.storeNameError == false && this.addresscheck == false && this.proofCheck == false && this.usernameCheck == false && this.usernumber == false) {
      this.http.postFormData("/seller_update_profile", formdata).subscribe((response: any) => {
        console.log(response);        
      }, (error: any) => {
        console.log(error);
      }
      );

      this.http.postFormData('/seller_id_proof', idformdata).subscribe((response: any) => {
        if (response.success == "true") {
          console.log(response);
        }
      }, (error: any) => {
        console.log(error);
      }
      
      );
      this.http.postFormData('/seller_address_proof', addressproofform).subscribe((response: any) => {
        if (response.success == "true") {
          console.log(response);
        }
      }, (error: any) => {
        console.log(error);
      }
      );
      this.router.navigate(['/social-media-details'])
    }

  }



  store_categoryCheck: any;
  idproofcheck: any;
  store_category_id: any;
  addressproofcheck: any;


  navigatetoNextTab(){
    this.router.navigate(['/social-media-details'])
  }
  
}

