import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit {
  @Input() orientation: string;
  @Input() imageSrc: string;
  @Input() linkHref: string;
  @Input() description: string;
  @Input() title: string;
  @Input() work: string;

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


  constructor() {
  }

  ngOnInit() {
    PortfolioProjectComponent.attachLoadImageListener();
    PortfolioProjectComponent.controlOverlayWidths();
  }

}
