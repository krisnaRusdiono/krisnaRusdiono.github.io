import { Component } from '@angular/core';
import { RouteConfigService } from './route-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public routeConfigService: RouteConfigService
  ) {}

  title = 'profileApp';

}
