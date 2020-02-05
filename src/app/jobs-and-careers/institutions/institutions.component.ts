import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { locations, sectors } from '../../../assets/Searchfilters'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})
export class InstitutionsComponent implements OnInit {
  locations = locations
  sectors = sectors
  locationKey = 'All'
  sectorKey = 'Any'
  results = []
  numberOfResult;
  institutionsList;
  closeResult: string;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  //Location filter
  getLocation(key) { 
    var numOfposition
    this.locationKey = key
    this.results = []
    this.numberOfResult = 0
    numOfposition = this.locations.findIndex(item => item.value == key)
    var x = document.getElementsByClassName("btn-locations")
    for (var i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    x[numOfposition].className += " active"
    if (this.locationKey === 'All' && this.sectorKey === 'Any') {
      this.results = this.institutionsList.institutions
      this.numberOfResult = this.results.length
    }
    if (this.locationKey !== 'All' && this.sectorKey === 'Any') {
      for (var a = 0; a < this.institutionsList.institutions.length; a++) {
        if (this.institutionsList.institutions[a].location === this.locationKey){
          this.results.push(this.institutionsList.institutions[a])
        }
      }
      this.numberOfResult = this.results.length
    }
    if (this.locationKey !== 'All' && this.sectorKey !== 'Any') {
      for (var a = 0; a < this.institutionsList.institutions.length; a++) {
        if (this.institutionsList.institutions[a].location === this.locationKey && this.institutionsList.institutions[a].sector === this.sectorKey) {
          this.results.push(this.institutionsList.institutions[a])
        }
      }
      this.numberOfResult = this.results.length
    }
  }

  //Sector filter
  getSector(key) {
    var numOfposition
    this.sectorKey = key
    this.results = []
    this.numberOfResult = 0
    numOfposition = this.sectors.findIndex(item => item.value == key)
    var x = document.getElementsByClassName("btn-sectors")
    for (var i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    x[numOfposition].className += " active"
    if (this.locationKey === 'All' && this.sectorKey === 'Any') {
      this.results = this.institutionsList.institutions
      this.numberOfResult = this.results.length
    }
    if (this.locationKey === 'All' && this.sectorKey !== 'Any') {
      for (var a = 0; a < this.institutionsList.institutions.length; a++) {
        if (this.institutionsList.institutions[a].sector === this.sectorKey){
          this.results.push(this.institutionsList.institutions[a])
        }
      }
      this.numberOfResult = this.results.length
    }
    if (this.locationKey !== 'All' && this.sectorKey !== 'Any') {
      for (var a = 0; a < this.institutionsList.institutions.length; a++) {
        if (this.institutionsList.institutions[a].location === this.locationKey && this.institutionsList.institutions[a].sector === this.sectorKey) {
          this.results.push(this.institutionsList.institutions[a])
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
      this.institutionsList = data
      // console.log(this.institutionsList.institutions)
      this.results = this.institutionsList.institutions
      this.numberOfResult = this.results.length
      var x, y
      x = document.getElementsByClassName("btn-locations")
      // console.log(x[0].className)
      x[0].className += " active"
      y = document.getElementsByClassName("btn-sectors")
      y[0].className += " active"
    })
  }
}
