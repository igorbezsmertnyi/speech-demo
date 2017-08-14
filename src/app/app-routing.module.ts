import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PagesContainerComponent } from './containers/pages-container/pages-container.component'

const routes: Routes = [
  { path: '', children: [], component: PagesContainerComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
