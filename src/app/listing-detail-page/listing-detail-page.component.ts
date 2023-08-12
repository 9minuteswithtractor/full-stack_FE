import { Component, OnInit } from '@angular/core';
// DUNNO => this will get the value of the id coresponding to item ?
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css'],
})
export class ListingDetailPageComponent implements OnInit {
  listing: Listing | undefined; // ???

  constructor(private route: ActivatedRoute) {}

  // DUNNO =>  WHY?
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
  }
}
