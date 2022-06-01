import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http: HttpService, private router: Router,) { }
  ionViewDidEnter() {
    this.plotSimplePieChart();
    this.displaydetail();
    this.viewCount();
  }


  displaydetails = [];
  showdate: "";
  showtime: "";

  displaydetail() {
    this.http.get('/read_all_offer').subscribe((response: any) => {
      console.log(response);
      this.displaydetails = response.records;

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  promotion: any = []
  noRecords: any = false;


  plotSimplePieChart() {


    var one: number = 55;
    var two: number = 15;
    var three: number = 5;
    var four: number = 10;
    var five: number = 10;

    var category_one;
    var category_two;
    var category_three;
    var category_four;
    var category_five;



    this.http.get('/list_offer_promotion').subscribe((response: any) => {
      console.log(response);

      console.log(response.records.length);
      if (response.records.length == 0) {
        this.noRecords = true;
      } else {
        this.noRecords = false;
      }

      if (response.success == "true") {
        this.noRecords = false;
        this.promotion = response.records;


      }



      // one = response.records.product_count
      // two = response.records.product_count
      // three = response.records.product_count
      // four = response.records.product_count
      // five = response.records.product_count


      if (response.records.length == 0) {
        console.log("working" + response.records.length);
        one = 0;
        two = 0;
        three = 0;
        four = 0;
        five = 0;
        category_one = ''
        category_two = ''
        category_three = ''
        category_four = ''
        category_five = ''
      }


      if (response.records.length == 1) {
        console.log("working" + response.records.length);
        one = response.records[0].product_count
        two = 0;
        three = 0;
        four = 0;
        five = 0;

        category_one = response.records[0].category
        category_two = ''
        category_three = ''
        category_four = ''
        category_five = ''

      }
      if (response.records.length == 2) {
        console.log("working" + response.records.length);
        one = response.records[0].product_count
        two = response.records[1].product_count
        three = 0;
        four = 0;
        five = 0;
     
        

        category_one = response.records[0].category
        category_two = response.records[1].category
        category_three = ''
        category_four = ''
        category_five = ''
      }

      if (response.records.length == 3) {
        console.log("working" + response.records.length);
        one = response.records[0].product_count
        two = response.records[1].product_count
        three = response.records[2].product_count
        four = 0;
        five = 0;

        category_one = response.records[0].category
        category_two = response.records[1].category
        category_three = response.records[2].category
        category_four = ''
        category_five = ''

      }

      if (response.records.length == 4) {
        console.log("working" + response.records.length);
        one = response.records[0].product_count
        two = response.records[1].product_count
        three = response.records[2].product_count
        four = response.records[3].product_count
        five = 0;

        category_one = response.records[0].category
        category_two = response.records[1].category
        category_three = response.records[2].category
        category_four = response.records[3].category
        category_five = ''

      }

      if (response.records.length == 5) {
        console.log("working" + response.records.length);
        one = response.records[0].product_count
        two = response.records[1].product_count
        three = response.records[2].product_count
        four = response.records[3].product_count
        five = response.records[4].product_count;

        category_one = response.records[0].category
        category_two = response.records[1].category
        category_three = response.records[2].category
        category_four = response.records[3].category
        category_five = response.records[4].category

      }





      let myChart = HighCharts.chart('dynamicSpline', {
        chart: {
          plotBackgroundColor: "#fff",
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',


        },
        credits: {
          enabled: false
        },
        title: {
          text: 'Your Promotions',
          style: {
            color: '#5C5C5C',

          }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',

            dataLabels: {
              enabled: false,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black',

              }
            }
          }
        },



        series: [{
          name: 'Promotion Status',
          colorByPoint: true,
          type: undefined,

          data: [{
            name: category_one,
            y: one,
            color: '#2e2c2d',
            // width: 1500,
            // height: 2000,
            // sliced: true,
            // selected: true
          }, {
            name: category_two,
            color: '#00BFC4',
            y: two
          },
          {
            name: category_three,

            color: '#778899',
            y: three
          },
          {
            name: category_four,
            color: '#ADD8E6',
            y: four
          },
          {
            name: category_five,
            color: '#20B2AA',
            y: five
          }]
        }]
      });
      console.log(one, two, three, four, five);

    }, (error: any) => {
      console.log(error);
      this.noRecords = true;
    }
    );





  }


  //Naviagtions
  notification() {
    this.router.navigate(['/notification'])
  }

  viewsCount: any;
  viewCount() {
    this.http.get('/alarm_count',).subscribe((response: any) => {
      this.viewsCount = response.store_alarm_count + response.product_alarm_count;
      console.log(this.viewsCount);

    }, (error: any) => {
      console.log(error);
    }
    );
  }


  searchPage() {
    this.router.navigate(['/searchpage'])
  }

}