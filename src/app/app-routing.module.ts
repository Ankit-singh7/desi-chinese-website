import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren:()=> import ('../app/container/home/home.module').then(m=>m.HomeModule),
  },
  {
    path:'about',
    loadChildren:()=> import ('../app/container/about/about.module').then(m=>m.AboutModule),
  },
  {
    path:'service',
    loadChildren:()=> import ('../app/container/service/service.module').then(m=>m.ServiceModule),
  },
  {
    path:'testimonial',
    loadChildren:()=> import ('../app/container/testimonial/testimonial.module').then(m=>m.TestimonialModule),
  },
  {
    path:'menu',
    loadChildren:()=> import ('../app/container/menu/menu.module').then(m=>m.MenuModule),
  },
  {
    path:'contact',
    loadChildren:()=> import ('../app/container/contact/contact.module').then(m=>m.ContactModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
