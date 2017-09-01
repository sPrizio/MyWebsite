import {Component, Input, OnInit} from '@angular/core';
import { Side } from '../side';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit {
  static side = [];
  @Input() orientation: string;
  @Input() imageSrc: string;
  @Input() linkHref: string;
  @Input() description: string;
  @Input() title: string;
  @Input() work: string;
  pageWidth: number;

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

  //  controls widths of overlays
  private static controlOverlayWidths(): void {
    window.addEventListener('resize', PortfolioProjectComponent.calculateOverlaySize);
  }

  //  calculates overlay size on image load
  private static attachLoadImageListener(): void {
    const elements = <HTMLCollectionOf<HTMLImageElement>>document.getElementsByClassName('project-image');

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('load', PortfolioProjectComponent.calculateOverlaySize);
    }
  }

  //  initializes types of displayed divs (images on left or right)
  private static initializeSides(): void {
    if (PortfolioProjectComponent.length < 3) {
      const components = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName('portfolio-component');

      for (let i = 0; i < components.length; i++) {
        if ((i % 2) === 0) {
          this.side.push(new Side('left'));
        } else {
          this.side.push(new Side('right'));
        }
      }
    }
  }

  constructor() {}

  ngOnInit() {
    window.addEventListener('load', function () {
      PortfolioProjectComponent.initializeSides();
    });
    this.trackPageWidth();
    PortfolioProjectComponent.attachLoadImageListener();
    PortfolioProjectComponent.controlOverlayWidths();
    window.addEventListener('resize', this.trackPageWidth);
  }

  //  keeps track of page width and adjusts columns' display of image
  private trackPageWidth(): void {
    this.pageWidth = window.innerWidth;
    const images = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName('image-container');
    const components = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName('portfolio-component');
    if (this.pageWidth <= 767) {
      for (let i = 0; i < images.length; i++) {
        components[i].appendChild(images[i]);
      }
    } else if (this.pageWidth > 767) {
      for (let i = 0; i < images.length; i++) {
        if (PortfolioProjectComponent.side[i].getSide() === 'left') {
          components[i].appendChild(images[i]);
        } else {
          components[i].insertBefore(images[i], components[i].firstChild);
        }
      }
    }
  }

}
