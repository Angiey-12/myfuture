import { Component, OnInit, Input } from '@angular/core';
import { interestareas } from '../../../../assets/interest-areas'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { locations, sectors } from '../../../../assets/Searchfilters'

@Component({
  selector: 'app-occupation-detail-page',
  templateUrl: './occupation-detail-page.component.html',
  styleUrls: ['./occupation-detail-page.component.scss']
})
export class OccupationDetailPageComponent implements OnInit {
  // @Input()
  // keys
  // results
  allData
  list = []
  locations = locations
  sectors = sectors
  // interestareas = interestareas
  occupationLabel: string
  constructor (
    private http: HttpClient,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
  ){
    this.occupationLabel = this.route.snapshot.params.detail
  }

  ngOnInit() {
    this.http.get('../../../../assets/occupations.json').subscribe(data => {
      console.log(data)
      console.log(this.occupationLabel)
      this.allData = data
      for (var i=0; i<this.allData.results.length; i++) {
        if (this.allData.results[i].prefLabel === this.occupationLabel){
          console.log(this.allData.results[i])
          this.list.push(this.allData.results[i])
        }
      }
    })
  }
}
