import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offersearch',
  templateUrl: './offersearch.page.html',
  styleUrls: ['./offersearch.page.scss'],
})
export class OffersearchPage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) { }

  ngOnInit() {
  }

  offerName: any;
  showOffer: any;
  ShowOffers = [];
  OfferShowname: any = false;
  OfferShowDetail: any = false;
  searchOffer(offerName) {
    console.log(offerName);
    this.OfferShowname = true;
    this.OfferShowDetail = false;
    this.OtherOfferShowDetail = false;
    var s = this.offerName;
    this.ShowOffers = [];
    this.http.get('/search_offer?s=' + s).subscribe((response: any) => {
      this.ShowOffers = [];
      for (var i = 0; i <= response.records.length; i++) {

        console.log(response.records[i].product);
        this.ShowOffers.push(response.records[i].product);
      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }


  productImage = "";
  productname = "";
  productdescription = "";
  cost: any = "";
  unit: any = "";
  tbid: any = "";
  offer: any;
  offertime: any;
  totalcost: any;
  offerprice: any;
  offertbid: any;
  otherOffer: any;
  OtherOfferShowDetail: any = false;
  IfOfferPresent: any;
  IfNotOfferPresent: any;


  clearData() {
    this.offerName = " ";

  }

  //Naviagtions
  notification() {
    this.router.navigate(['/notification'])
  }



  offerDetail(data) {
    console.log(data);
    var s = data;
    this.http.get('/search_offer?s=' + s).subscribe((response: any) => {
      this.OfferShowname = false;
      console.log(response);
      if (response.records[0].offer != "") {
        this.IfOfferPresent = true
        this.IfNotOfferPresent = false

      } else {
   
        this.IfOfferPresent = false
        this.IfNotOfferPresent = true;
      }
   
        this.OtherOfferShowDetail = false;
        this.OfferShowDetail = true;
        this.productImage = response.records[0].product_image;
        this.productname = response.records[0].product;
        this.productdescription = response.records[0].description;
        this.cost = response.records[0].total_cost;
        this.unit = response.records[0].product_unit;
        this.offer = response.records[0].offer;
        this.offertime = response.records[0].offer_end_time;
        this.totalcost = response.records[0].total_cost;
        this.offerprice = response.records[0].offer_price;
        this.offertbid = response.records[0].tbid;
        this.otherOffer = response.records[0].other_offer;
     

    }, (error: any) => {
      console.log(error);
    }
    );
  }




  productImages: any;
  productnames: any;
  productdescriptions: any;
  costs: any;
  units: any;
  otherOffers: any;
  offertimes: any;
  totalcosts: any;
  redirecttoOffer() {
    this.router.navigate(['/addofferEditPage'], { queryParams: { tbid: this.productname } });
    console.log(this.productname);

  }

  backToHome() {
    this.router.navigate(['/tabs/tab4']);
  }
}