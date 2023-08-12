import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // for navigations
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css'],
})
export class NewListingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // TODO  add to local array[] ?
  onSubmit(): void {
    alert('Creating new ad ...');
    this.router.navigateByUrl('/my-listings');
  }
}
