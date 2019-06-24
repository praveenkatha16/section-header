import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sections = [
    { title: 'Apple', body: 'Mobile Comapny', type: 'red' },
    { title: 'Google', body: 'Search Engine Company', type: 'green' },
    { title: 'Yahoo', body: 'Ad Company', type: 'red' },
    { title: 'Amazon', body: 'E-Commerce Comapny', type: 'green' }
  ];
}
