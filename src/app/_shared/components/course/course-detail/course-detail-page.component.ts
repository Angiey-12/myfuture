import { Component, OnInit, Input } from '@angular/core';
import { interestareas } from '../../../../../assets/interest-areas'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { locations, sectors } from '../../../../../assets/Searchfilters'
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-occupation-detail-page',
  templateUrl: './occupation-detail-page.component.html',
  styleUrls: ['./occupation-detail-page.component.scss']
})
export class CourseDetailPageComponent implements OnInit {
  lineyData: number[] = [];
  categories: string[] = [];
  allData
  list = []
  locations = locations
  sectors = sectors
  barydata = ['This occupation', 'All occupations']
  bardata = []
  linedata = []
  // interestareas = interestareas
  occupationLabel: string

  constructor (
    private http: HttpClient,
    private route: ActivatedRoute,
  ){
    this.occupationLabel = this.route.snapshot.params.detail
    // Object.assign(this, this.bardata)
    // Object.assign(this, this.linedata);
  }
  ngOnInit() {
    this.http.get('../../../../../assets/occupation-detail.json').subscribe(data => {
      console.log(data)
      console.log(this.occupationLabel)
      this.allData = data
      this.bardata.push(this.allData.weeklyEarnings, 1460)
      console.log(this.bardata)
      this.lineyData.push(this.allData.historic, this.allData.current, this.allData.projected)
      this.categories.push(this.allData.historicLabel,this.allData.currentLabel,this.allData.projectedLabel)
      // for (var i=0; i<this.allData.results.length; i++) {
      //   if (this.allData.results[i].prefLabel === this.occupationLabel){
      //     console.log(this.allData.results[i])
      //     this.list.push(this.allData.results[i])
      //   }
      // }
    })
  }
}
