import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// here we need to import ListingPage obj
import { ListingPageComponent } from './listing-page/listing-page.component';

// use this to implement routing
const routes: Routes = [
  { path: 'listings', component: ListingPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
