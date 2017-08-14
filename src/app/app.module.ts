import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { MdButtonModule, MdCheckboxModule } from '@angular/material'
import 'hammerjs'

import { StoreService } from './app.store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './containers/app/app.component'
import { NavComponent } from './components/nav/nav.component'
import { PageComponent } from './components/page/page.component'
import { PagesContainerComponent } from './containers/pages-container/pages-container.component'
import { WelcomeComponent } from './pages/welcome/welcome.component'
import { InstalationComponent } from './pages/instalation/instalation.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageComponent,
    PagesContainerComponent,
    WelcomeComponent,
    InstalationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdButtonModule,
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
