import { NgModule } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { PagesContainerComponent } from './containers/pages-container/pages-container.component'
import { SynthesisComponent } from './pages/synthesis/synthesis.component'
import { RecognitionComponent } from './pages/recognition/recognition.component'

const routes: Routes = [
  { path: '', children: [], component: PagesContainerComponent },
  { path: 'synthesis', component: SynthesisComponent },
  { path: 'recognition', component: RecognitionComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : window['_app_base'] || '/' }]
})

export class AppRoutingModule { }
