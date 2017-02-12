import {Routes, RouterModule} from "@angular/router";
import {KlocekComponent} from "./klocek/klocek.component";
import {HomeComponent} from "./home/home.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'klocek', component: KlocekComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES)
