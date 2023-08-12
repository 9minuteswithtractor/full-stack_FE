import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css'],
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];
  constructor() {}

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingName: string, listeningId: string): void {
    // have to implement back-end afterwards
    alert(`Sure You want to delete "${listingName}" ( id:${listeningId} )`);
  }
}
