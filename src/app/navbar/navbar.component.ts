import { Component } from '@angular/core';
import { ToggleService } from '../sidebar-menu/toggle.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private _showButtons: boolean = true;

  constructor(private toggleService: ToggleService, private responsive: BreakpointObserver){}

  get showButtons(): boolean{
    return this._showButtons;
  }

  toggleSidenav(): void{
    this.toggleService.toggleSideNav();
  }

  switchButtons(): void{
    this._showButtons = !this._showButtons;
  }

  ngOnInit() {
  
    this.responsive.observe(Breakpoints.HandsetLandscape)
      .subscribe(result => {

        if (result.matches) {
          this.switchButtons();
        }

      });
  }
}
