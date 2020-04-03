import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-panel-item',
  templateUrl: './nav-panel-item.component.html',
  styleUrls: ['./nav-panel-item.component.css']
})
export class NavPanelItemComponent {
  @Input() public value: string;

  constructor() {
  }
}
