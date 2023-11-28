import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
      trigger('openClose', [
          // ...
          state(
              'open',
              style({
                  height: '200px',
                  opacity: 1,
                  backgroundColor: '#FFAA8B',
              })
          ),
          state(
              'closed',
              style({
                  height: '100px',
                  opacity: 0.8,
                  backgroundColor: '#000055',
                  color: '#FFFFFF',
              })
          ),
          transition('open => closed', [animate('1s')]),
          transition('closed => open', [animate('0.5s')]),
      ]),
      trigger('boxHover', [
        state(
          'hover',
          style({
            backgroundColor: 'pink',
            'transform': 'translateX(500px)',
          })
        ),
        transition('* => hover', [animate('1s')]),
      ])
  ],
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.css'],
})
export class OpenCloseComponent {
  isOpen = true;
  isHover = false;

  toggle() {
      this.isOpen = !this.isOpen;
  }
  changeColor() {
    this.isHover = true;
  }
}
