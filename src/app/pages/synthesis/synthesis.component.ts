import { Component, OnInit } from '@angular/core'
import speech from 'speech-js'
import uniq from 'lodash/uniq'

@Component({
  selector: 'synthesis',
  templateUrl: './synthesis.component.html',
  styleUrls: ['./synthesis.component.scss']
})

export class SynthesisComponent implements OnInit {
  rate: number = 1
  volume: number = 0.5
  pitch: number = 1
  text: string = 'Write something'
  voices: any = []
  langs: any = []
  selectedLang: any = 'en-US'
  selectedVoice: any = ''
  selectedVoiceName: string

  constructor() { }

  ngOnInit() {
    speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices()
      this.langs = uniq(this.voices.map(voice => voice.lang))
    }
  }

  setRate(v) {
    this.rate = Number(v.value.toFixed(3))
  }

  setVolume(v) {
    this.volume = Number(v.value.toFixed(3))
  }

  setPitch(v) {
    this.pitch = Number(v.value.toFixed(3))
  }

  selectVoice(v) {
    this.selectedVoice = this.voices.find(voice => v.value === voice.name)
    this.selectedVoiceName = this.selectedVoice.name
    this.selectedLang = null
  }

  selectLang(v) {
    this.selectedLang = v.value
    this.selectedVoice = null
  }

  speck() {
    const lang = this.selectedLang ? this.selectedLang : this.selectedVoice
    speech.synthesis(this.text, lang, this.rate, this.volume, this.pitch)
  }
}
