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
      this.resume = this.update(x);
      console.log(this.resume); // TODO: delete
    });
  }

  update(resume: Resume): Resume {
    var positionId: number = 0;
    var projectId: number = 0;

    resume.positions.forEach(position => {
      positionId++;
      position.id = "position/" + positionId.toString();

      position.projects.forEach(project => {
        projectId++;
        project.id = "project/" + projectId.toString();
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

    return resume;
  }
}
