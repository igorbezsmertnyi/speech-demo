import { Component } from '@angular/core'
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  location: Location

  constructor(private router: Router) { }

  ngOnInit() {
    // this.router.events.subscribe((evt) => {
    //     if (!(evt instanceof NavigationEnd)) {
    //       return
    //     }
    //     console.log(evt)
    // })
  }
}
