import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  menuItems: any = [
    { name: 'Instalation', link: '#instalation' },
    { name: 'Quick Start', link: '#quick-start' },
    { name: 'Synthesis', link: '/speech-demo/synthesis' },
    { name: 'Recognition', link: 'recognition' },
    { name: 'Demo', link: 'demo' }
  ]

  version:string = '0.1.0'

  constructor() { }

  ngOnInit() { }
}
