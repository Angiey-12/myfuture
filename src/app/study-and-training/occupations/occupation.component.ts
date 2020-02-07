import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { interestareas } from '../../../assets/interest-areas';


@Component({
    selector: 'app-occupation',
    templateUrl: './occupation.component.html',
    styleUrls: ['./occupation.component.scss']
})

export class OccupationComponent implements OnInit {
    interestareas = interestareas
    num = 0
    Keywords = '';
    loading = false
    isShow = true
    constructor(
        private router: Router,
        private route : ActivatedRoute
    ){
    }
    ngOnInit() {
        
    }
}
