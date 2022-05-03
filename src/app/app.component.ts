import { Component } from '@angular/core';
import { SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wallapop';
  spinner = SPINNER.ballScaleMultiple;
  color = '#26C19F';
  size = 90;
  hasProgress = true;
}
