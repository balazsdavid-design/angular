import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductOfferComponent } from './components/product-offer/product-offer.component';
import { ProductUpdatesComponent } from './components/product-updates/product-updates.component';
import { RatingComponent } from './components/rating/rating.component';
import { FeedbackComponent } from './components/feedback/feedback.component'
import { AppComponent } from './app.component';
import { ListviewComponent } from './listview/listview.component';
import { DetailedviewComponent } from './detailedview/detailedview.component';


export const routes : Routes = [
    {path: 'dogs', component: AppComponent},
    {path: 'dogs/'+ListviewComponent.selectedDog?.getName, component : DetailedviewComponent},
    {path: '', redirectTo: '/dogs', pathMatch:'full'}
  ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
