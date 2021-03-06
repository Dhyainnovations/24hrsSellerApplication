import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute,) {
   
   }

  ngOnInit() {
   
  }

  noRecords:any = false;

  ionViewDidEnter() {
    this.displaynotification();
  }

  searchPage() {
    this.router.navigate(['/searchpage'])
  }

  setalarm() {
    this.router.navigate(['/setalarm'])
  }

  displaynotifications = [];
  displaynotification() {
    this.http.get('/read_notification').subscribe((response: any) => {
      console.log(response);
      this.noRecords = false;
      this.displaynotifications = response.records;
    }, (error: any) => {
      console.log(error);
      this.noRecords = true;
    }
    );

  }
}
