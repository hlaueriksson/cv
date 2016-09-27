import { Component, OnInit } from '@angular/core';

import { Resume } from './models';
import { CvService } from './cv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CvService]
})
export class AppComponent implements OnInit {
  title = 'CV';
  resume: Resume = new Resume();

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.getCv();
  }

  getCv(): void {
    this.cvService.getResume().then(x => {
      this.resume = x;
      console.log(this.resume); // TODO: delete
    });
  }
}
