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

    for (var i = resume.positions.length - 1; i >= 0; i--) { 
      positionId++;
      var position = resume.positions[i];
      position.id = "position/" + positionId.toString();

      for (var j = position.projects.length - 1; j >= 0; j--) { 
        projectId++;
        var project = position.projects[j];
        project.id = "project/" + projectId.toString();
        project.tokens =
          project.name +
          project.description +
          project.url +
          project.roles.join() +
          project.keywords.join() +
          project.from +
          project.to;
      }
    }

    return resume;
  }
}
