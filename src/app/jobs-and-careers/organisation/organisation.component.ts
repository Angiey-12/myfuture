import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { offering} from '../../../assets/Searchfilters'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
  offerings = offering
  offerkey = 'Any'
  results = []
  numberOfResult;
  organisationsList;
  closeResult: string;
  regularDistribution

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  //Location filter
  getoffer(key) { 
    var numOfposition
    this.offerkey = key
    this.results = []
    this.numberOfResult = 0
    numOfposition = this.offerings.findIndex(item => item.value == key)
    var x = document.getElementsByClassName("btn-orga")
    for (var i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    x[numOfposition].className += " active"
    if (this.offerkey === 'Any') {
      this.results = this.organisationsList.organisations
      this.numberOfResult = this.results.length
    }
    if (this.offerkey !== 'Any') {
      for (var a = 0; a < this.organisationsList.organisations.length; a++) {
        if (this.organisationsList.organisations[a].offering === this.offerkey){
          this.results.push(this.organisationsList.organisations[a])
        }
      }
      this.numberOfResult = this.results.length
    }
  }

  //filter json
  getValue () {
    this.results = []
    // console.log(this.institutionsList.institutions.find(e => e.location === this.locationKey))
    // this.results = this.institutionsList.institutions.find(e => e.location === this.locationKey)
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
            this.closeResult = 'Closed with: $result';
        }, (reason) => {
            this.closeResult = 'Dismissed $this.getDismissReason(reason)';
        });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
          this.closeResult = 'Closed with: $result';
      }, (reason) => {
          this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
            this.closeResult = 'Closed with: $result';
        }, (reason) => {
            this.closeResult = 'Dismissed $this.getDismissReason(reason)';
        });
    }
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  'with: $reason';
      }
  }
  change(tabname) {
    var i, x
    x = document.getElementsByClassName("elink");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    if (tabname === 'courses') {
      document.getElementById("details-tab").className = document.getElementById("details-tab").className.replace(" tablink-active", " tablink")
      document.getElementById("courses-tab").className = document.getElementById("courses-tab").className.replace(" tablink", " tablink-active")
    }
    if (tabname === 'details') {
      document.getElementById("courses-tab").className = document.getElementById("details-tab").className.replace(" tablink-active", " tablink")
      document.getElementById("details-tab").className = document.getElementById("courses-tab").className.replace(" tablink", " tablink-active")
    }
    document.getElementById(tabname).style.display = "block";
  }

  // get local institution.json
  ngOnInit() {
    // x[0].className += "active"
    this.http.get('assets/insititution.json').subscribe(data => {
      this.organisationsList = data
      this.results = this.organisationsList.organisations
      this.numberOfResult = this.results.length
      var x
      x = document.getElementsByClassName("btn-orga")
      // console.log(x[0].className)
      x[0].className += " active"
      // y = document.getElementsByClassName("btn-sectors")
      // y[0].className += " active"
    })
  }
}
