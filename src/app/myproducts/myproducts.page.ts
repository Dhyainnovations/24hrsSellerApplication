import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.page.html',
  styleUrls: ['./myproducts.page.scss'],
})
export class MyproductsPage implements OnInit {
  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ProductList()

    });
  }

  ngOnInit() {
    
  }

  userdetails: any = atob(localStorage.getItem("24hrs-user-data"));
  noProducts: any = false;
  showReadData: any = ""
  productlist: any = [];
  displayReadData: any = "";
  exit() {
    this.router.navigate(['/tabs'])
  }

  
  //Naviagtions
  notification() {
    this.router.navigate(['/notification'])
  }

  NavigatetoNotification() {
    this.router.navigate(['/notification'])
  }


  ProductList() {
    this.http.get('/read_all_product',).subscribe((response: any) => {
      console.log(response.records);

      this.productlist = response.records;
      this.noProducts = false;

    }, (error: any) => {
      console.log(error);
      this.noProducts = true;
      this.productlist=[];
    }
    );
  }

  navigatetoaddoffer(productname){
    this.router.navigate(['/add-product-offer'], { queryParams: { product_name: productname } });
  }

  editDetails(product_name) {
    const p = product_name;
    console.log(p);
    this.http.get('/read_one_product?p=' + p).subscribe((response: any) => {
      this.displayReadData = response.records.tbid;
      this.showReadData = response.records.product_name;
      this.router.navigate(['/myproductEditPage'], { queryParams: { tbid: this.displayReadData, product_name: this.showReadData } });
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  searchPage() {
    this.router.navigate(['/searchpage'])
  }

  navigateTo() {
    this.router.navigate(['/tabs/tab3'])
  }

}
