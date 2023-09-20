import { Component } from '@angular/core';
import { ToggleService } from './toggle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {

  constructor(public toggleService: ToggleService, private router: Router){}

  public load(name: String): void{
    this.router.navigate(['/games/' + name]);
  }

  private options: {name: string, clickHandler: any}[] = [
    { "name": "Backgammon", "clickHandler": () => this.load('backgammon')}
  ]

  public getOptions(): {name: string, clickHandler: any}[]{
    return this.options;
  }
}
