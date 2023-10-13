import { Component } from '@angular/core';
import { ToggleService } from '../services/toggle.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private _showButtons: boolean = true;

  constructor(private toggleService: ToggleService, private responsive: BreakpointObserver, private router: Router){}

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
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe(result => {
      if (result.matches) {
        this._showButtons = false;
      }
      else{
        this._showButtons = true;
        if (this.toggleService.isExpanded) {
          this.toggleService.toggleSideNav();
        }
      }
    });
  }
}
