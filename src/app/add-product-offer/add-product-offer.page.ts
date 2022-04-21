import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-product-offer',
  templateUrl: './add-product-offer.page.html',
  styleUrls: ['./add-product-offer.page.scss'],
})
export class AddProductOfferPage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, private route: ActivatedRoute, public datepipe: DatePipe) {

    this.LoadReadData();
  }

  ngOnInit() {
  }

  minutes: any = [];
  hours: any = [];
  product_name: any;
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
  subcategorytbid: any;
  producttbid: any;
  LoadReadData() {
    this.route.queryParams.subscribe(params => {
      this.product_name = params.product_name;
      var p = params.product_name
      this.http.get('/read_one_product?p=' + p).subscribe((response: any) => {
        console.log(response.records);
        this.Category = response.records.category;
        this.category_tbid = response.records.category_id;
        this.subcategory = response.records.subcategory;
        this.subcategorytbid = response.records.subcategory_id;
        this.productName = response.records.product_name;
        this.producttbid = response.records.tbid;
        this.totalCost = response.records.cost;

      }, (error: any) => {
        console.log(error);
      }
      );
    }
    );
  }

  expireddateandTime: any;
  expiryDateandTime: any = new Date;

  change(data) {
    var time = this.datepipe.transform((data), 'HH:MM:SS');
    let date = this.datepipe.transform((data), 'yyyy-MM-dd');
    this.expireddateandTime = date + " " + time
  }

  addoffer() {
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
      subcategory_id: this.subcategorytbid,
      product_id: this.producttbid,
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
        this.Category = "";
        this.subcategory = "";
        this.productName = "";
        this.totalCost = "";
        this.router.navigate(['/tabs/tab4'])
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
        title: 'Kindly Enter All The Details'
      })
    }
    )
  }






  notification() {
    this.router.navigate(['/notification'])
  }
  backToPrivious() {
    this.router.navigate(['/myproducts'])
  }



  category_tbid: any = "";
  tbid: any;


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
  otherofferradio: any = true;
  onItemChange2() {
    this.DiscountOffer = true;
    this.offer = "";
    this.otherofferradio = true;
    this.otheroffersradio = false;
    this.offerPrice = "";
    this.OtherOffer = false;
    this.otherofferenable = false;
  }


}
