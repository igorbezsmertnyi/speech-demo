import { Component, OnInit } from '@angular/core'
import speech from 'speech-js'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  menuItems: any = [
    { name: 'Instalation', link: 'instalation' },
    { name: 'Quick Start', link: 'quick-start' },
    { name: 'Synthesis', link: 'synthesis' },
    { name: 'Recognition', link: 'recognition' },
    { name: 'Demo', link: 'demo' }
  ]

  version:string = '0.0.9'

  constructor() { }

  ngOnInit() {
    const synthesis = speech.synthesis('welcome to speech js demo page', 'en-US')
  }
}
