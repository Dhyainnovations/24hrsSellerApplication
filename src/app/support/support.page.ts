import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  problemDescription: any = "";
  userdetails: any = localStorage.getItem("tbid");
  tbid: any = this.userdetails;


  navigateToFaq() {
    this.router.navigate(['/frequently-asked-questions'])
  }


  backToPrivious() {
    this.router.navigate(['/tabs/tab5'])
  }

  navigateToFAQ() {
    this.router.navigate(['/frequently-asked-questions'])
  }
  submit() {
    const obj = {
      tbid: this.tbid,
      description: this.problemDescription
    }
    this.http.postFormData('/seller_description', obj).subscribe((response: any) => {
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
          title: 'Report Send Successfully'
        })
        this.problemDescription = "";
      }


    }, (error: any) => {
      console.log(error);
    }
    );



  }
}




