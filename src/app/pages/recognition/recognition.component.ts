import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import speech from 'speech-js'
import uniq from 'lodash/uniq'

@Component({
  selector: 'recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.scss']
})

export class RecognitionComponent implements OnInit {
  @ViewChild('video') video: ElementRef
  @ViewChild('color') color: ElementRef
  @ViewChild('colorName') colorName: ElementRef

  langs: any = []
  recognition: any
  selectedLang: string = 'en-US'

  constructor() {
    speechSynthesis.onvoiceschanged = () => {
      this.langs = uniq(window.speechSynthesis.getVoices().map(voice => voice.lang))
    }
  }

  ngOnInit() { }

  selectLang(v) {
    this.selectedLang = v.value
  }

  repeatAction() {
    this.recognition = speech.recognition(this.selectedLang)
    this.recognition.start()
    this.recognition.onresult = e => {
      speech.synthesis(e.results[0][0].transcript, this.selectedLang)
    }
  }

  playAction() {
    this.recognition = speech.recognition('en-US')
    this.recognition.start()
    this.recognition.onresult = e => {
      let res = e.results[0][0].transcript

      if (res === 'play') {
        this.video.nativeElement.play()
      } else if (res === 'pause') {
        this.video.nativeElement.pause()
      } else if (res === 'stop') {
        this.video.nativeElement.pause()
        this.video.nativeElement.currentTime = 0
      }
      console.log(res)
    }
  }

  setColorAction() {
    this.recognition = speech.recognition('en-US')
    this.recognition.start()
    this.colorName.nativeElement.innerHTML = ''
    this.color.nativeElement.style.backgroundColor = 'white'

    this.recognition.onresult = e => {
      let res = e.results[0][0].transcript.replace(/\s/g,'')
      this.colorName.nativeElement.innerHTML = res
      this.color.nativeElement.style.backgroundColor = res
    }
  }
}
