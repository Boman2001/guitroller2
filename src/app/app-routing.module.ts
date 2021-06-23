import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AllgamesComponent } from './legacy/allgames/allgames.component'
import { HomeComponent } from './legacy/home/home.component'
import { IndevelopmentComponent } from './legacy/indevelopment/indevelopment.component'
import { SubwaysurfersComponent } from './legacy/subwaysurfers/subwaysurfers.component'

// TODO inladen via module
const routes: Routes = [
  {
    path: 'allgames',
    component: AllgamesComponent,
  },
  {
    path: 'subwaysurfers',
    component: SubwaysurfersComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'indevelopment',
    component: IndevelopmentComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
