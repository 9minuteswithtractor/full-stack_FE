import { Component, OnInit } from '@angular/core';
// DUNNO => this will get the value of the id coresponding to item ?
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';
@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css'],
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing?: Listing;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) {}

  // DUNNO =>  WHY?
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.listingsService.getListingById(id).subscribe((listing) => {
        this.listing = listing;
        this.isLoading = false;
      });
      this.listingsService
        .addViewToListing(id)
        .subscribe(() => console.log('Views updated'));
    }
  }
}
