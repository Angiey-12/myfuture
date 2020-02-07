import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-occupation-header',
  templateUrl: './occupation-header.component.html',
  styleUrls: ['./occupation-header.component.scss']
})
export class OccupationHeaderComponent implements OnInit {
  Keywords = '';
  value: string;
  constructor(
    // private formBuilder: FormBuilder,
    private router: Router,
    private route : ActivatedRoute
  ) { 
    // this.Keywords = this.formBuilder.group ({
    //   Searchwords: ''
    // })
  }

  onSubmit(Data) {
    // this.value = ""
    // this.Keywords = Data
    // this.value = this.Keywords.Searchwords
    // this.router.navigate([this.value], {relativeTo: this.route});
  }
  go(d) {
    console.log(d)
    this.router.navigate(['/occupations/', d]);
  }
  ngOnInit() {
  }

}
