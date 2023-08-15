import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css'],
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];
  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    // this.listings = fakeMyListings;
    /////NEW_CONTENT//////////////SO_FAR_GOOD
    this.listingsService
      .getListingsForUser()
      .subscribe((listings) => (this.listings = listings));
  }
  //////////////////////////////////////////////////
  onDeleteClicked(listingName: string, listingId: string): void {
    //BELOW_HERE_IS_NEW_CODE_THAT_THROWS_ERROR
    this.listingsService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id !== listingId
      );
    });
  }
}
