import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
  @Input() section: Section;

  constructor() {}

  ngOnInit() {}
}

export interface Section {
  title: string;
  body: string;
  type: string;
}
