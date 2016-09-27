import { Component, OnInit } from '@angular/core';

import { Resume } from './models';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ResumeService]
})
export class AppComponent implements OnInit {
  title = 'CV';
  resume: Resume = new Resume();
  keywords: string[] = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.getResume();
  }

  getResume(): void {
    this.resumeService.getResume().then(x => {
      this.resume = x;
      this.keywords = this.getKeywords();
      console.log(this.resume); // TODO: delete
      console.log(this.keywords);
    });
  }

  getKeywords(): string[] {
    var result: string[] = [];

    this.resume.positions.forEach(position => {
      position.projects.forEach(project => {
        project.keywords.forEach(keyword => {
          if (result.indexOf(keyword) < 0) {
            result.push(keyword);
          }
        })
      })
    });

    return this.sort(result);
  }

  sort(array: string[]): string[] {
    return array.sort((n1, n2) => {
      if (n1 > n2) return 1;
      if (n1 < n2) return -1;
      return 0;
    });
  }
}
