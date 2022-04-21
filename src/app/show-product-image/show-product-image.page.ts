import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-product-image',
  templateUrl: './show-product-image.page.html',
  styleUrls: ['./show-product-image.page.scss'],
})
export class ShowProductImagePage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(queryParams => {
      this.productImage = queryParams['productname'];


    });
  }

  ngOnInit() {
    this.getProductImage();
  }



  BackToPrevious() {
    this.router.navigate(['/tabs/tab3'])
  }


  notification() {
    this.router.navigate(['/notification'])
  }
  productImage: any;


  productImageList: any;
  getProductImage() {
    this.productImageList = [];
    var obj = {
      product_name: this.productImage
    }
    this.http.post('/product_image_list', obj).subscribe((response: any) => {
      console.log(response.records);

    

      this.productImageList = response.records
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  SelectImage(data) {
    console.log(data);
    var slicedUrl=data.replace("https://dhya.in/24Hrs/images/seller/product/", "");
    console.log(slicedUrl);
    
    this.router.navigate(['/tabs/tab3'], { queryParams: { selectedProductImageTbid: slicedUrl } });
  }
}