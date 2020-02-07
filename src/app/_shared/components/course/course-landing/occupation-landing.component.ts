import { Component, OnInit } from '@angular/core';
import { interestareas } from '../../../../../assets/interest-areas'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-occupation-landing',
  templateUrl: './occupation-landing.component.html',
  styleUrls: ['./occupation-landing.component.scss']
})
export class OccupationLandingComponent implements OnInit {
  interestareas = interestareas
  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    
  }

}
