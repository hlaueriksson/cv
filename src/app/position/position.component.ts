import { Component, Input } from '@angular/core';

import { Position } from '../models';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent {

  @Input() position: Position;

}
