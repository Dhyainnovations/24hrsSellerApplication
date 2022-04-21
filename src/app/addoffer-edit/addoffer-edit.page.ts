import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-addoffer-edit',
  templateUrl: './addoffer-edit.page.html',
  styleUrls: ['./addoffer-edit.page.scss'],
})
export class AddofferEditPage implements OnInit {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute, public datepipe: DatePipe) {
    route.params.subscribe(val => {
      this.sellerAllDetails();
      //this.getsubCategoryList()
      this.gettBid()
      this.readOneOffer()
      console.log(this.productName);
      this.defaultSubCategoryList();
      this.defaultProductList();
      this.isVisible = true;
    });
  }

  ngOnInit() {
  }
  tbid_value: any = localStorage.getItem("tbid");
  categoryList: any;
  productList: any;
  subcategoryList = [];
  Category: any = '';
  subcategory: any = '';
  productName: any = '';
  offer: any = '';
  totalCost: any = '';
  offerPrice: any = '';
  description: any = '';
  otheroffer: any = "";
  OfferproductName: any;
  otheroffersradio: any;

  isVisible: any = true;

  backAddoffer() {
    this.router.navigate(['/tabs/tab4'])
  }

  getCategoryList() {
    var obj = {
      store_category_id: this.store_category_id
    }
    this.http.post('/list_category', obj).subscribe((response: any) => {
      this.categoryList = response.records
      console.log(response.records);
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  gettBid() {
    this.route.queryParams.subscribe(params => {
      console.log(params.tbid);
      this.tbid_value = params.tbid;
      this.OfferproductName = params.tbid;

    }
    );
    const o = this.tbid_value;
    console.log(o);
    this.http.get('/read_one_offer?o=' + o).subscribe((response: any) => {
      this.tbid_value = response.records.tbid
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    );
  }
  offer_end_time: any;
  category_tbid: any = "";
  tbid: any;
  OfferHour: any;
  OfferMinute: any;
  offer_checked: any;
  other_offer_checked: any;
  readOneOffer() {
    this.http.get('/read_one_offer?o=' + this.OfferproductName).subscribe((response: any) => {
      console.log(response.records);
      this.category_tbid = response.records.category_id;
      this.description = response.records.description;
      this.Category = response.records.category;
      this.subcategory = response.records.subcategory;
      this.productName = response.records.product;
      this.offer = response.records.offer;
      this.otheroffer = response.records.other_offer;
      this.totalCost = response.records.total_cost;
      this.offerPrice = response.records.offer_price;
      this.tbid = response.records.tbid;
      this.producttbid = response.records.product;
      this.offer_end_time = response.records.offer_end_time;
      this.subcategory_tbid = response.records.subcategory_id;
      this.product_tbid = response.records.product_id
      this.calculateOfferPrice();

      if (this.otheroffer != "") {
        this.offer = "";
        this.offerPrice = "";
        this.offer_checked = false;
        this.other_offer_checked = true;
      } else {
        this.otheroffer = "";
        this.offer_checked = true;
        this.other_offer_checked = false;
      }

    }, (error: any) => {
      console.log(error);
    }
    )
  }

  subCategoryNotfound: any = false;
  searchPage() {
    this.router.navigate(['/searchpage'])
  }

  calculateOfferPrice() {
    var offerprice = (this.offer / 100) * this.totalCost
    this.calculateRemainPrice(offerprice)
  }
  calculateRemainPrice(offerprice) {
    this.offerPrice = this.totalCost - offerprice;
  }

  SubCategoryPopupModel(data) {
    console.log(data.subcategory);
    const s = data.subcategory;
    this.http.get('/read_one_subcategory?s=' + s).subscribe((response: any) => {
      this.subcategory_tbid = response.records.tbid;
      console.log(response.records.tbid);
      this.subcategory = data.subcategory;
    }, (error: any) => {
      console.log(error);
    }
    );
  }
  ProductNotfound: any;


  popupModel(data) {
    const formdata = new FormData();
    formdata.append("category", data.category);
    this.category_tbid = data.category;
    this.Category = data.category;

    const c = data.category;
    console.log(c);
    this.http.get('/read_one_category?c=' + c).subscribe((response: any) => {
      this.category_tbid = response.records.tbid;
      console.log(response.records.tbid);

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  categorysubmit() {
    this.isVisible = true
    const obj = {
      category_id: this.category_tbid,
      store_category_id: this.store_category_id
    }
    this.http.postFormData('/list_subcategory', obj).subscribe((response: any) => {
      console.log(response.records);
      this.subcategoryList = response.records
      console.log(this.subcategoryList);


    }, (error: any) => {
      console.log(error);
      this.subCategoryNotfound = true;
      this.subcategoryList = [];
    }
    );
    this.addnewcategorypopup = false;
  }



  offerDelete() {
    this.router.navigate(['/tabs/tab4']);
    const obj = {
      tbid: this.tbid_value
    }
    this.http.postFormData('/delete_offer', obj).subscribe((response: any) => {
      console.log(response);
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
          title: 'Deleted successfully'
        })
      }

    }, (error: any) => {
      console.log(error);
    }
    )
  }

  // getsubCategoryList() {

  //   this.http.get('/read_all_subcategory',).subscribe((response: any) => {

  //     this.subcategoryList = response.records
  //     console.log(response.records);

  //   }, (error: any) => {
  //     console.log(error);
  //   }
  //   );
  // }

  producttbid: any;
  change(data) {
    var time = this.datepipe.transform((data), 'HH:MM:SS');
    let date = this.datepipe.transform((data), 'yyyy-MM-dd');
    this.expireddateandTime = date + " " + time
  }
  expiryDateandTime: any = new Date;
  expireddateandTime: any;
  addoffer() {
    const p = this.productName;
    console.log(p);
    this.http.get('/read_one_product?p=' + p).subscribe((response: any) => {
      this.producttbid = response.records.tbid;
      if (response.success == "true") {
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
        var expiryTime
        if (this.expireddateandTime == undefined) {
          expiryTime = this.offer_end_time
        } else {
          expiryTime = this.expireddateandTime;
        }
        const productData = {
          tbid: this.tbid,
          category_id: this.category_tbid,
          subcategory_id: this.subcategory_tbid,
          product_id: this.product_tbid,
          description: this.description,
          offer: this.offer,
          other_offer: this.otheroffer,
          total_cost: this.totalCost,
          offer_price: this.offerPrice,
          offer_start_time: currentTime,
          offer_end_time: expiryTime,
          offer_name: this.productName,

        }
        console.log(productData);
        if (this.offer.length > 0 || this.otheroffer.length > 0) {
          this.http.postFormData('/update_offer', productData).subscribe((response: any) => {
            console.log(response);
            if (response.success == "true") {
              this.router.navigate(['/tabs/tab4']);
              if (response.success == "true") {
                console.log(response);
                console.log(productData);
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
                  title: 'Offer  Successfully Posted'
                })

              }
            }

          }, (error: any) => {
            console.log(error);
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
              title: 'Kindly Fill All The Details'
            })
          }
          );

        } else {
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
            title: 'Kindly Fill All The Details'
          })
        }
      }


    }), (error: any) => {
      console.log(error);
    };



  }

  addnewcategorypopup = false;
  hideaddnewcategorypopup() {
    this.isVisible = true;
    this.addnewcategorypopup = false;

  }
  showaddnewcategorypopup() {
    this.isVisible = false;
    this.addnewcategorypopup = true;

  }
  addnewsubcategorypopup: any = false
  showaddnewsubcategorypopup() {
    this.isVisible = false;
    this.addnewsubcategorypopup = true;
  }

  hideaddnewsubcategorypopup() {
    this.isVisible = true;
    this.addnewsubcategorypopup = false;
  }

  subcategory_tbid: any;
  subcategorysubmit(value) {
    console.log(value.subcategory);
    this.http.get('/read_one_subcategory?s=' + value.subcategory).subscribe((response: any) => {
      this.subcategory_tbid = response.records.tbid;
      console.log(this.subcategory_tbid);
      const obj = {
        subcategory_id: this.subcategory_tbid,
        store_category_id: this.store_category_id,
        category_id: this.category_tbid,
      }
      console.log(obj);

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
    })

    this.hideaddnewsubcategorypopup();
  }

  addnewproductpopup: any = false;
  showaddproductpopup() {
    this.isVisible = false;
    this.addnewproductpopup = true;
  }
  hideaddproductpopup() {
    this.isVisible = true;
    this.addnewproductpopup = false;
  }

  product_tbid: any;
  productselectform(value) {
    this.productName = value.productName;
    console.log(this.productName);
    const p = this.productName;
    this.http.get('/read_one_product?p=' + p).subscribe((response: any) => {
      if (response.success == "true") {
        this.isVisible = true;
      }

      this.product_tbid = response.records.tbid;
      this.totalCost = response.records.cost;
      console.log(this.product_tbid);
    }, (error: any) => {
      console.log(error);
      this.isVisible = true;
    }
    );
    this.addnewproductpopup = false;
  }

  DiscountOffer: any;
  OtherOffer: any;
  otherofferenable: any;
  onItemChange() {
    this.DiscountOffer = false;
    this.OtherOffer = true;
    this.otherofferenable = true;
    this.otheroffer = "";
    this.otherofferradio = false;
    this.otheroffersradio = true;
  }
  otherofferradio: any;
  onItemChange2() {
    this.DiscountOffer = true;
    this.offer = "";
    this.otherofferradio = true;
    this.otheroffersradio = false;
    this.offerPrice = null;
    this.OtherOffer = false;
    this.otherofferenable = false;
  }






  defaultSubCategoryList() {
    const obj = {
      category_id: this.category_tbid
    }
    console.log(obj);

    this.http.postFormData('/read_subcategory', obj).subscribe((response: any) => {
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



  defaultProductList() {
    console.log(this.subcategory);

    this.http.get('/read_one_subcategory?s=' + this.subcategory).subscribe((response: any) => {
      this.subcategory_tbid = response.records.tbid;
      console.log(this.subcategory_tbid);
      const obj = {
        subcategory_id: this.subcategory_tbid, store_category_id: this.store_category_id,
        category_id: this.category_tbid,

      }
      console.log(obj);

      this.http.postFormData('/read_product', obj).subscribe((response: any) => {
        console.log(response.records);
        this.productList = response.records;
        this.ProductNotfound = false;
        this.hideaddnewsubcategorypopup();
      }, (error: any) => {
        console.log(error);
        this.productList = [];
        this.ProductNotfound = true;
      }
      );
    })

  }

  store_category_id: any;
  sellerAllDetails() {
    this.http.get('/seller_details').subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.store_category_id = response.records.store_category_id;
        this.getCategoryList()
      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }
}