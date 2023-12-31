// input for e.g. synch button text according to needed case/page
// DUNNO => what does 'Output', 'EventEmitter' does?
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css'],
})
export class ListingDataFormComponent implements OnInit {
  // DUNNO => understand @Input
  @Input() buttonText: any;
  @Input() currentName: any;
  @Input() currentDescription: any;
  @Input() currentPrice: any;

  name: string = '';
  description: string = '';
  price: string = '';

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  // DUNNO =>  how to add to local array[] (fake-data.ts) ?
  onButtonClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0,
    });
  }
}
