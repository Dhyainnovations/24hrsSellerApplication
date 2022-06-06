import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  route: any;
  offerTimer: string;
  noTimer: any;

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute, public datepipe: DatePipe) {
    route.params.subscribe(val => {
      this.isvisible = false;
      this.cardVisible = true;
      this.headerVivible = true;
      this.sellerAllDetails();
      this.GetOtherList();

      // setInterval(() => {
      //   this.GetOtherList();
      // }, 5000);

    });


  }

  ngOnInit() {

   
  }


  //Initialization
  store_categoryCheck: any;
  public date: string = new Date().toISOString();
  categoryList: any;
  subcategoryList: any = []
  offerList: any = []
  productList: any;
  subcategoryName: any = "";
  cardVisible: any;
  isvisible: any = true;
  userdetails: any = localStorage.getItem("tbid");
  storeName: any = localStorage.getItem("StoreName");
  Category: any = '';
  subcategory: any = '';
  productName: any = '';
  offer: any = '';
  otheroffer: any = ''
  totalCost: any = '';
  offerPrice: number;
  offerTime: any = '';
  description: any = '';
  OfferCheck: any;
  descriptionerror: any;
  otherofferradio: any = true;
  otherofferenable: any = true; idproofcheck: any;
  addressproofcheck: any;
  DiscountOffer: any = false;
  OtherOffer: any = true;
  noOffer: any = false;
  PopupModel: any = false;
  subcategoryPopupModel: any = false;
  categoryName: any = ""
  producttbid: any;
  totalcosterror: any;
  ProductTbidCheck: any;
  CheckSubCategoryTbidCheck: any;
  CheckCategoryTbidCheck: any;
  subsubcategoryAddnew: any = true;
  ProductNotfound: any = true;
  subcategory_tbid: any;
  category_tbid: any;
  subCategoryNotfound: any = true;
  OnlyIfCategorySelected: any = true;
  otherofferList: any = [];

  searchIcon: any = true;

  headerVivible: any = true;


  backToPrivious() {
    this.cardVisible = true;
    this.isvisible = false;
    this.headerVivible = true;
    this.searchIcon = true
  }

  offerPage() {
    this.searchIcon = false
    this.cardVisible = false;
    this.isvisible = true;
    this.headerVivible = false;
    this.noOffer = false;
  }

  //Naviagtions
  notification() {
    this.router.navigate(['/notification'])
  }

  //Get SubCategory Based On Category
  popupModel(data) {
    this.OnlyIfCategorySelected = false
    const formdata = new FormData();
    formdata.append("category", data.category);
    this.category_tbid = data.category;
    this.CheckCategoryTbidCheck = false;
    console.log(data.category);
    const obj = {
      category_id: this.category_tbid,
      store_category_id: this.store_category_id
    }
    this.http.postFormData('/list_subcategory', obj).subscribe((response: any) => {
      console.log(response.records);
      this.subcategoryList = response.records
      console.log(this.subcategoryList);
      this.subCategoryNotfound = false;

    }, (error: any) => {
      console.log(error);
      this.subCategoryNotfound = true;
      this.subcategoryList = [];
    }
    );



  }


  //Get Product Based On SubCategory
  popupModelSubCategory(data) {
    const formdata = new FormData();
    formdata.append("subcategory", data.subcategory);
    this.subcategory_tbid = data.subcategory;
    const obj = {
      store_category_id: this.store_category_id,
      category_id: this.category_tbid,
      subcategory_id: data.subcategory
    }
    console.log(obj);

    this.CheckSubCategoryTbidCheck = false
    this.http.postFormData('/read_product', obj).subscribe((response: any) => {
      console.log(response.records);
      this.productList = response.records;
      this.ProductNotfound = false;
    }, (error: any) => {
      console.log(error);
      this.productList = [];
      this.ProductNotfound = true;
    }
    );
  }





  //Calculate Offer Amount
  keydownoffer() {
    var offerprice = (this.offer / 100) * this.totalCost
    this.calculateRemainPrice(offerprice);

  }


  keydown() {
    var offerprice = (this.offer / 100) * this.totalCost
    this.calculateRemainPrice(offerprice);
    this.totalcosterror = false
    this.OfferCheck = false;
    this.totalcosterror = false;

  }

  //Make False Function
  otheroffercheck() {
    this.OfferCheck = false;
    this.totalcosterror = false;
  }

  productNameCheckCondition(data) {
    this.ProductTbidCheck = false;
    const p = data.productName;
    this.productName = data.productName;
    this.http.get('/read_one_product?p=' + p).subscribe((response: any) => {
      this.totalCost = response.records.cost;
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  descrtionerrorFalse() {
    this.descriptionerror = false;
  }

  calculateRemainPrice(offerprice) {
    this.offerPrice = this.totalCost - offerprice;
  }


  //Check Whether Value Is Present Or Not
  CheckCategoryTbid() {
    if (this.category_tbid == undefined) {
      this.CheckCategoryTbidCheck = true;
    } else {
      this.CheckCategoryTbidCheck = false;
    }
  }

  CheckSubCategoryTbid() {
    if (this.subcategory_tbid == undefined) {
      this.CheckSubCategoryTbidCheck = true;
    } else {
      this.CheckSubCategoryTbidCheck = false;
    }
  }

  CheckProductTbid() {

    if (this.productName.length <= 0) {
      this.ProductTbidCheck = true;
    } else {
      this.ProductTbidCheck = false;
    }
  }

  checkOfferCost() {
    if (this.totalCost.length <= 0) {
      this.totalcosterror = true
    } else {
      this.totalcosterror = false
    }

  }

  offerorOtherOffer() {
    if (this.offer.length <= 0 && this.otheroffer.length <= 0) {
      this.OfferCheck = true;
    } else {
      this.OfferCheck = false;
    }
  }


  descriptioncheck() {
    if (this.description.length <= 0) {
      this.descriptionerror = true;
    } else {
      this.descriptionerror = false
    }
  }

  change(data) {
    var time = this.datepipe.transform((data), 'HH:MM:SS');
    let date = this.datepipe.transform((data), 'yyyy-MM-dd');
    this.expireddateandTime = date + " " + time
  }
  expiryDateandTime: any = new Date;
  expireddateandTime: any;
  //OfferAdd
  addoffer() {

    this.CheckCategoryTbid();
    this.CheckSubCategoryTbid();
    this.CheckProductTbid();
    this.checkOfferCost();
    this.offerorOtherOffer();
    this.descriptioncheck();

    if (this.idproofcheck == false && this.addressproofcheck == false && this.store_categoryCheck == false) {
      if (this.CheckCategoryTbidCheck == false && this.CheckSubCategoryTbidCheck == false && this.ProductTbidCheck == false && this.totalcosterror == false && this.OfferCheck == false && this.descriptionerror == false) {
        const p = this.productName;
        console.log(p);
        this.http.get('/read_one_product?p=' + p).subscribe((response: any) => {
          this.producttbid = response.records.tbid;
          console.log(this.producttbid);
          if (response.success == "true") {
            //GetCurrentDateandTimeStamp
            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            let seconds = new Date().getSeconds();
            let date = this.datepipe.transform((new Date), 'yyyy-MM-dd');
            let checkhours;
            let checkmins;
            let checksec;
            if (hours < 10) {
              checkhours = ("0" + hours)
            } else {
              checkhours = hours
            }
            if (seconds < 10) {
              checksec = ("0" + seconds)
            } else {
              checksec = seconds
            }
            if (minutes < 10) {
              checkmins = ("0" + minutes)
            } else {
              checkmins = minutes
            }
            var Time = checkhours + ":" + checkmins + ":" + checksec;
            var currentDate = date;
            var currentTime = currentDate + " " + Time;
            var expiryTime = this.expireddateandTime;
            const productData = {
              category_id: this.category_tbid,
              subcategory_id: this.subcategory_tbid,
              product_id: this.producttbid,
              description: this.description,
              offer_name: this.productName,
              offer: this.offer,
              other_offer: this.otheroffer,
              total_cost: this.totalCost,
              offer_price: this.offerPrice,
              offer_start_time: currentTime,
              offer_end_time: expiryTime

            }
            console.log(productData);
            this.http.postFormData('/create_offer', productData).subscribe((response: any) => {
              console.log(response);
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
                  title: 'Offer Created Successfully'
                })
                this.totalCost = '';
                this.otheroffer = '';
                this.subcategory = '';
                this.description = '';
                this.productName = '';
                this.offerTime = '';
                this.offerPrice = 0;
                this.offer = '';
                this.category_tbid = '';
                this.cardVisible = true;
                this.isvisible = false;
                this.PopupModel = false;
                this.GetOtherList();
              }


            }, (error: any) => {
              console.log(error);
              if (error.error.message == "Unable to create offer. Data is incomplete.") {
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
                  title: 'Kindly Fill All The Details'
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
                  icon: 'success',
                  title: 'Offer Already Exist'
                })
              }
            }
            );
          }
        }, (error: any) => {
          console.log(error);
        });
      }
    }
    else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: 'Kindly Update Your Profile Details'
      })
      this.router.navigate(['/sellerdetailpage'])
    }

  }


  //PopUpModel True - False / Show - Hide;
  visibleCategoryPopup() {
    if (this.store_categoryCheck == false) {
      this.PopupModel = true;
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: 'Kindly Update Your Profile Details'
      })
      this.router.navigate(['/sellerdetailpage'])
    }
  }

  backToprivious() {
    this.PopupModel = false;
  }

  visibleSubCategoryPopup() {
    this.subcategoryPopupModel = true;
  }

  ScBackToprivious() {
    this.subcategoryPopupModel = false;
  }

  //Create New Category
  createCategory() {

    const catData = {
      category_name: this.categoryName,
    }
    this.http.postFormData('/create_category', catData).subscribe((response: any) => {
      console.log(response);

      if (response.success == "true") {
        this.Category = ''
        this.categoryName = ''
        this.getCategoryList()
        this.PopupModel = false;
        this.subsubcategoryAddnew = false;
      }
    }, (error: any) => {
      console.log(error);
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
        title: 'Category Already Exist'
      })
    }
    );

  }



  //Get Category List
  getCategoryList() {
    var obj = {
      store_category_id: this.store_category_id
    }
    console.log(obj);

    this.http.post('/list_category', obj).subscribe((response: any) => {
      this.categoryList = response.records
      console.log(response.records);

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  //Get Sub Category List
  getSubcategoryList() {
    const obj = {
      store_category_id: this.store_category_id,
      category_id: this.category_tbid
    }
    this.http.post('/list_subcategory', obj).subscribe((response: any) => {
      console.log(response.records);
      this.subcategoryList = response.records
      console.log(response.records);
      console.log(this.subcategoryList);

    }, (error: any) => {
      console.log(error);
    }
    );
  }


  //Redirect To View One Offer
  repostOffer(tbid) {
    this.router.navigate(['/addofferEditPage'], { queryParams: { tbid: tbid } });
    console.log(tbid);
  }

  searchPage() {
    this.router.navigate(['/offersearch']);
  }


  //Get All available Offer
  expiredofferList: any = [];
  expiredotherofferList: any = [];


  GetOtherList() {
    this.expiredotherofferList = [];
    this.otherofferList = []
    this.http.get('/offer_time_calculate',).subscribe((response: any) => {
      console.log(response);
      for (var i = 0; i <= response.records.length; i++) {
        if (response.records[i].remaining_time[0] != "-") {
          const data = {
            product_image: response.records[i].product_image,
            offer_end_time: response.records[i].offer_end_time,
            total_cost: response.records[i].total_cost,
            product: response.records[i].product,
            product_unit: response.records[i].product_unit,
            other_offer: response.records[i].other_offer,
            remaining_time: response.records[i].remaining_time,
            // remaining_time: 100,
            offer: response.records[i].offer,
            offer_price: response.records[i].offer_price,
            quantity: response.records[i].product_weight
          }
          console.log(this.otherofferList);
          this.otherofferList.push(data);
        }

        
      }
      this.noOffer = false;
    }, (error: any) => {
      console.log(error);
      this.noOffer = true;
    }
    );

 
    
    this.GetOfferExpiredList();


    
  }

  ngAfterViewInit() {
    // setInterval(() => {
    //   this.otherofferList = this.otherofferList.map(function(element){
    //     // element.remaining_time = element.remaining_time.getTime() -1 * 1000 ;
    //     console.log(new Date(element.remaining_time));
        
    //     return element;
    // });
    // }, 1000);

  }

  

  noExpiredOffer: any = false
  expiredOffersBanner: any;
  CheckOtherOfferExpiry: any;
  GetOfferExpiredList() {
    this.http.get('/offer_time_calculate',).subscribe((response: any) => {
      console.log(response);
      for (var i = 0; i <= response.records.length; i++) {
        console.log(response.records);
        if (response.records[i].remaining_time[0] == "-") {
          const data = {
            product_image: response.records[i].product_image,
            offer_end_time: response.records[i].offer_end_time,
            total_cost: response.records[i].total_cost,
            product: response.records[i].product,
            product_unit: response.records[i].product_unit,
            other_offer: response.records[i].other_offer,
            remaining_time: response.records[i].remaining_time,
            offer: response.records[i].offer,
            offer_price: response.records[i].offer_price
          }
          this.expiredotherofferList.push(data);
        }
        this.CheckOtherOfferExpiry = this.expiredotherofferList.length
        if (this.CheckOtherOfferExpiry > 0) {
          this.expiredOffersBanner = true;
          this.noExpiredOffer = false
        } else {
          this.expiredOffersBanner = true;
          this.noExpiredOffer = true
        }
      }
      this.noOffer = false;
    }, (error: any) => {
      console.log(error);
      this.noOffer = true;
    }
    );
  }



  CheckOfferExpiry: any;


  //Create New Sub Category
  createSubcategory() {
    const subcatData = {
      category_id: this.category_tbid,
      subcategory_name: this.subcategoryName
    }
    this.http.postFormData('/create_subcategory', subcatData).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.subcategoryName = ''
        this.subcategoryPopupModel = false;
        const obj = {
          category_id: this.category_tbid
        }
        this.http.postFormData('/list_subcategory', obj).subscribe((response: any) => {
          console.log(response.records);
          this.subcategoryList = response.records
          console.log(this.subcategoryList);
          this.subCategoryNotfound = false;
        }, (error: any) => {
          console.log(error);
          this.subCategoryNotfound = true;
          this.subcategoryList = [];
        }
        );
      }
    }, (error: any) => {
      console.log(error);
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
        title: 'Sub Category Already Exist'
      })
    }
    );

  }


  onItemChange() {
    this.DiscountOffer = false;
    this.OtherOffer = true;
    this.otherofferenable = true;
    this.otheroffer = "";

  }

  onItemChange2() {
    this.DiscountOffer = true;
    this.offer = "";
    this.otherofferradio = false;
    this.offerPrice = null;
    this.OtherOffer = false;
    this.otherofferenable = false;
  }





  store_category_id: any;
  sellerAllDetails() {
    this.http.get('/seller_details').subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.store_category_id = response.records.store_category_id;
        this.getCategoryList()
        console.log(response.records.id_proof);
        console.log(response.records.address_proof);
        if (response.records.store_category != null) {
          this.store_categoryCheck = false;
        } else {
          this.store_categoryCheck = true;
        }
      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }
}