import { Component } from '@angular/core';
import { ToggleService } from './services/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toggleService: ToggleService){}

  get getToggleService(): ToggleService{
    return this.toggleService;
  }

  title = 'games-with-viv';
}
