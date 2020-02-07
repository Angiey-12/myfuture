import { Component, OnInit, Input } from '@angular/core';
import { interestareas } from '../../../../assets/interest-areas'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-occupation-search-page',
  templateUrl: './occupation-search-page.component.html',
  styleUrls: ['./occupation-search-page.component.scss']
})
export class OccupationSearchPageComponent implements OnInit {
  // @Input()
  keys
  results
  allData
  interestareas = interestareas
  constructor (
    private http: HttpClient,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit() {
    this.http.get('../../../../assets/occupations.json').subscribe(data => {
      console.log(data)
      this.allData = data
      this.route.paramMap.subscribe(params => {
        // console.log(params.get('value'))
        this.keys = params.get('value')
        this.results = []
        for(var i=0; i<this.allData.results.length; i++) {
          if(this.allData.results[i].keywords.includes(this.keys)) {
            this.results.push(this.allData.results[i])
          }
        }
        console.log(this.results)
      })
    })
  }
}
