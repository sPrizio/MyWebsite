import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  private typewriter_text = 'Want to say hi?';
  typewriter_display = '';

  constructor() {}

  ngOnInit() {
    this.controlFontSize();
    this.typingCallback(this);
  }

  //  defaults to fixed font size for larger screens
  controlFontSize(): void {
    const title = document.getElementById('page-title');
    const subtitle = document.getElementById('page-subtitle');

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1920) {
        title.style.fontSize = '4.5em';
        subtitle.style.fontSize = '2.25em';
      } else {
        title.style.fontSize = '3.5vw';
        subtitle.style.fontSize = '2vw';
      }
    });
  }

  //  method cannot be static
  typingCallback(that) {
    const total_length = that.typewriter_text.length;
    const current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
    } else {
      that.typewriter_display = '';
    }
    setTimeout(that.typingCallback, 100, that);
  }
}
