import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/gloabl-data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myNav = document.getElementById("nav1");
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  totalIndiaConfirmed = 0;
  totalIndiaActive = 0;
  totalIndiaDeaths = 0;
  totalIndiaRecovered = 0;
  loading = true;
  globalData: GlobalDataSummary[];
  datatable = [];
  chart = {
    PieChart : "PieChart" ,
    ColumnChart : 'ColumnChart' ,
    LineChart : "LineChart",
    height: 500,
    options: {
      animation:{
        duration: 1000,
        easing: 'out',
      },
      is3D: true
    }
  }


  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    // window.onscroll = function() {
    //   if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    //     this.myNav.classList.add("scroll");
    //   } else {
    //     this.myNav.classList.remove("scroll");
    //   }
    // };

    this.dataService.getGlobalData()
      .subscribe(
        {
          next: (result) => {
          //  console.log(result);
            this.globalData = result;
            result.forEach(cs => {
              if (!Number.isNaN(cs.confirmed)) {
                this.totalActive += cs.active
                this.totalConfirmed += cs.confirmed
                this.totalDeaths += cs.deaths
                this.totalRecovered += cs.active

              }

            })
            result.filter(cs => {
            if (!Number.isNaN(cs.confirmed)&& (cs.country =="India")) {
              // console.log(cs)
               this.totalIndiaActive += cs.active
               this.totalIndiaConfirmed += cs.confirmed
               this.totalIndiaDeaths += cs.deaths
               this.totalIndiaRecovered += cs.active
             }
            })
            this.initChart('c');
          },
          complete : ()=>{
            this.loading = false;
          }
        }
      )
  }
  updateChart(input: HTMLInputElement) {
    console.log(input.value);
    this.initChart(input.value)
  }

  initChart(caseType: string) {

    this.datatable = [];
    // this.datatable.push(["Country", "Cases"])

    this.globalData.forEach(cs => {
      let value :number ;
      if (caseType == 'c')
        if (cs.confirmed > 2000)
          value = cs.confirmed

      if (caseType == 'a')
        if (cs.active > 2000)
          value = cs.active
      if (caseType == 'd')
        if (cs.deaths > 1000)
          value = cs.deaths

      if (caseType == 'r')
        if (cs.recovered > 2000)
            value = cs.recovered


        this.datatable.push([
            cs.country, value
          ])
    })
   // console.log(this.datatable);

  }

}
