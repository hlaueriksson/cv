import { Component, OnInit } from '@angular/core';

import { Cv } from './cv';
import { CvService } from './cv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CvService]
})
export class AppComponent implements OnInit {
  title = 'CV';
  cv: Cv = new Cv();

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.getCv();
  }

  getCv(): void {
    this.cvService.getCv().then(x => this.cv = x);
  }
}
