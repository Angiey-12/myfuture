import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-term-of-use',
  templateUrl: './term-of-use.component.html',
  styleUrls: ['./term-of-use.component.scss']
})
export class TermofuseComponent implements OnInit {


  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }


  // get local institution.json
  ngOnInit() {


  }
}
