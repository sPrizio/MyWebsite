import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  //  calculates overlay's container size based on image
  private static calculateOverlaySize(): void {
    const sizedElement = <HTMLImageElement>document.getElementsByClassName('project-image')[0];
    const overlays = document.getElementsByClassName('overlay');

    const correctWidth = sizedElement.width;
    const correctHeight = sizedElement.height;

    for (let i = 0; i < overlays.length; i++) {
      const temp = <HTMLElement>overlays[i];
      temp.style.width = String(correctWidth) + 'px';
      temp.style.height = String(correctHeight) + 'px';
    }
  }
  constructor() {}

  ngOnInit() {
    this.controlFontSize();
    this.attachLoadImageListener();
    this.controlOverlayWidths();
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

  //  controls widths of overlays
  controlOverlayWidths(): void {
    window.addEventListener('resize', MainViewComponent.calculateOverlaySize);
  }

  //  calculates overlay size on image load
  attachLoadImageListener(): void {
    const elements = <HTMLCollectionOf<HTMLImageElement>>document.getElementsByClassName('project-image');

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('load', MainViewComponent.calculateOverlaySize);
    }
  }
}
