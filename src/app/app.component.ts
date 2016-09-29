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
  resume: Resume = new Resume();

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.getResume();
  }

  getResume(): void {
    this.resumeService.getResume().then(x => {
      this.resume = x;
      this.updateProjects();
      console.log(this.resume); // TODO: delete
    });
  }

  updateProjects(): void {
    var id: number = 0;

    this.resume.positions.forEach(position => {
      position.projects.forEach(project => {
        id++;
        project.id = id.toString();
        project.tokens =
          project.name +
          project.description +
          project.url +
          project.roles.join() +
          project.keywords.join() +
          project.from +
          project.to;
      })
    });
  }
}
