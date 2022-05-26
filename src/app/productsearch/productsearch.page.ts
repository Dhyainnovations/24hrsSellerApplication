import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.page.html',
  styleUrls: ['./productsearch.page.scss'],
})
export class ProductsearchPage implements OnInit {
  storeName: any;
  weight: any;

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  productName: any;
  ShowProducts: any = [];
  searchProduct() {
    this.productShowname = true;
    this.productShowDetail = false;
    var s = this.productName;
    this.ShowProducts = [];
    this.http.get('/search_product?s=' + s).subscribe((response: any) => {
      for (var i = 0; i <= response.records.length; i++) {
        console.log(response.records[i].product_name);
        this.ShowProducts.push(response.records[i].product_name);
      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }



  productShowname: any = true;
  productImage = "";
  productname = "";
  productdescription = "";
  cost: any = "";
  unit: any = "";
  tbid: any = "";
  productShowDetail: any;


  clearData() {
    this.productName = " ";
    this.productShowDetail = false

  }

   //Naviagtions
   notification() {
    this.router.navigate(['/notification'])
  }

  productDetail(data) {
    console.log(data);
    var s = data;
    var product_name;
    this.http.get('/search_product?s=' + s).subscribe((response: any) => {
      this.productShowname = false;
      this.productShowDetail = true;
      console.log(response);
      this.productImage = response.records[0].product_image;
      this.productname = response.records[0].product_name;
      this.productdescription = response.records[0].description;
      this.cost = response.records[0].cost;
      this.unit = response.records[0].unit;
      this.storeName = response.records[0].store_name;
      this.weight = response.records[0].weight

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  displayReadData: any;
  showReadData: any;
  RedirectToOneProduct() {
    const p = this.productname;
    console.log(p);
    this.http.get('/read_one_product?p=' + p).subscribe((response: any) => {
      this.displayReadData = response.records.tbid;
      this.showReadData = response.records.product_name;
      this.router.navigate(['/myproductEditPage'], { queryParams: { tbid: this.displayReadData, product_name: this.showReadData } });
      this.productName = "";
      this.productShowDetail = false;
    }, (error: any) => {
      console.log(error);
    }
    );
  }
  backToHome() {
    this.productShowDetail = false;
    this.router.navigate(['/myproducts'])
  }
}
