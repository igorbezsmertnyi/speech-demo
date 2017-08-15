import { Component, OnInit } from '@angular/core'
import speech from 'speech-js'

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const synthesis = speech.synthesis('welcome to speech js demo page', 'en-US')
  }
}
