import { Component } from '@angular/core';
import { ToggleService } from './toggle.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {

  constructor(public toggleService: ToggleService){}
}
