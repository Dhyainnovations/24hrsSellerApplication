import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.page.html',
  styleUrls: ['./frequently-asked-questions.page.scss'],
})
export class FrequentlyAskedQuestionsPage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.sellerAllDetails();
      this.faq();
    });
  }

  ngOnInit() {
  }

  storeId: any = localStorage.getItem("tbid");
  question: any;
  answer: any;
  faqs: any = []

  backToPrivious() {
    this.router.navigate(['/support'])
  }

  faq() {
    var obj = {
      store_category_id: this.store_category_id,

    }

    this.http.postFormData('/seller_faq', obj).subscribe((response: any) => {
      this.faqs = response.message.records
    }, (error: any) => {
      console.log(error);
    }
    );
  }



  store_category_id: any;

  sellerAllDetails() {
    this.http.get('/seller_details').subscribe((response: any) => {
      if (response.success == "true") {
        console.log(response);
        this.store_category_id = response.records.store_category_id


      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }


}
