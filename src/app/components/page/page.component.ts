import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
  @Input() pageId: number

  constructor() { }

  ngOnInit() { }
}
