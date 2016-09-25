import { Component, Input } from '@angular/core';

import { Project } from '../cv';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  @Input() project: Project;

}