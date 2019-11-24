import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: false,
        anchorScrolling: "enabled",
        onSameUrlNavigation: "reload",
        enableTracing: true,
        scrollPositionRestoration: "enabled"
      }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
