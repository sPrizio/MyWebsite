import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  private typewriterWords = ['Just saying hi?', 'Think I can help you?', 'Want to build something?'];
  typewriter_display = '';
  counter = 0;

  //  shows back to top button
  static showBackToTop(): void {
    const top = window.pageYOffset || document.documentElement.scrollTop,
      left = window.pageXOffset || document.documentElement.scrollLeft;
    const aboutTop = document.getElementById('main-view').offsetHeight;

    if (top > aboutTop) {
      document.getElementById('backToTop').style.opacity = '1';
    } else {
      document.getElementById('backToTop').style.opacity = '0';
    }
  }

  constructor() {
  }

  ngOnInit() {
    /*this.controlFontSize();*/
    this.typingCallback(this);
    this.toggleModal();
    window.onscroll = function () {
      MainViewComponent.showBackToTop();
    };
  }

  //  defaults to fixed font size for larger screens
  /*controlFontSize(): void {
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
  }*/

  //  method cannot be static
  typingCallback(that) {
    const total_length = that.typewriterWords[that.counter].length;
    const current_length = that.typewriter_display.length;

    if (current_length < total_length) {
      that.typewriter_display += that.typewriterWords[that.counter][current_length];
    } else {
      that.typewriter_display = '';
      ++that.counter;
    }

    setTimeout(that.typingCallback, 150, that);

    if (that.counter === 3) {
      that.counter = 0;
    }
  }

  //  toggle modal
  toggleModal(): void {
    const el = document.getElementById('contact-me');
    const modal = document.getElementById('modal');
    const close = document.getElementById('close');

    el.addEventListener('click', function () {
      modal.className += ' is-active';

      close.addEventListener('click', function () {
        modal.classList.remove('is-active');
      });
    });
  }

  //  back to top
  backToTop(): void {
    const cosParameter = window.scrollY / 2;
    let scrollCount = 0,
      oldTimestamp = performance.now();

    function step(newTimestamp) {
      scrollCount += Math.PI / (750 / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) {
        window.scrollTo(0, 0);
      }
      if (window.scrollY === 0) {
        return;
      }
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }
}
