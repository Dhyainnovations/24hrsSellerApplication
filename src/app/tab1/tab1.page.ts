import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  backButtonSubscription: any;

  constructor(private platform: Platform, public toastCtrl: ToastController, private http: HttpService, private router: Router, private menu: MenuController, route: ActivatedRoute, public navCtrl: NavController) {
    route.params.subscribe(val => {
     this.StoreName = localStorage.getItem("StoreName");

      this.offersCount()
      this.viewCount()
      this.list()
    });
  }

  ngOnInit() {



  }

  //Naviagtions
  notification() {
    this.router.navigate(['/notification'])
  }
  
  StoreName: any = localStorage.getItem("StoreName");

  listOfCat: any = [];
  encodeText: any;
  offerCount: any = 0;
  viewsCount: any = 0;
  offerObj = {
    card: "false",
    form: "true"
  }



  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  myproducts() {
    this.router.navigate(['/myproducts'])
  }



  list() {
    this.listOfCat = [];
    this.http.get('/product_count',).subscribe((response: any) => {
      console.log(response);
      this.listOfSubCat = response.records
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  listOfSubCat: any = []


  listOfProduct: any = [];
  listProduct() {
    this.listOfProduct = [];
    for (var i = 0; i < this.listOfSubCat.length; i++) {
      var obj = {
        subcategory: this.listOfSubCat[i]
      }
      console.log(obj);
      this.http.postFormData('/read_product', obj).subscribe((response: any) => {
        for (var i = 0; i < response.records.length; i++) {
          this.listOfProduct.push(response.records[i].tbid);
          console.log(this.listOfProduct);
        }
      }, (error: any) => {
        console.log(error);
      }
      );
    }
  }






  offers() {
    this.router.navigate(['/tabs/tab4'])
  }

  offersCount() {
    this.http.get('/read_all_offer',).subscribe((response: any) => {
      this.offerCount = response.records.length;
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  viewCount() {
    this.http.get('/alarm_count',).subscribe((response: any) => {
      this.viewsCount = response.store_alarm_count + response.product_alarm_count;
      console.log(this.viewsCount);

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  views() {
    this.router.navigate(['/tabs/tab2'])
  }
  searchPage() {
    this.router.navigate(['/searchpage'])
  }


  
}

