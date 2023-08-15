import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
// import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

// go back function
import { Location } from '@angular/common';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing?: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.listingsService.getListingById(id).subscribe((listing) => {
        this.listing = listing;

        this.message = `Hi! I'm interested in Your ${this.listing?.name.toLowerCase()} !`;
      });
    }
    // this.listing = fakeListings.find((listing) => listing.id === id);
  }

  // SENDING MESSAGE, giving thumbs-up, and navigate back to /listings page .

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

  goBack(): void {
    this.location.back();
  }
}
