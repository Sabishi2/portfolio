import { Component, signal, input, output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProjectIcon } from '../project-icon';
import { ProjectT } from '../../project-type';


@Component({
    standalone: false,
    selector: 'pi-carousel-holder-component',
    templateUrl: './pi-carousel-holder.html',
    styleUrl: './pi-carousel-holder.scss'
})


export class PICarouselHolderComponent {
    itemClicked = (idToHighlight: number) => {
        this.clickedItem.emit(idToHighlight)
    }
    hoverAndClickHandler = (idToHighlight: number, click: boolean) => {
        if (click)
            if (this.highlightedItem1 == idToHighlight) {
                this.itemClicked(-1);
                this.highlightedItem1 = -1;
            }

            else {
                this.itemClicked(idToHighlight);
                this.highlightedItem1 = idToHighlight;
            }
        else
            this.highlightedItem2 = idToHighlight;
    }
    clickedItem = output<number>();
    highlightedItem1 = -1;
    highlightedItem2 = -1;
    projects = input.required<Array<ProjectT>>()
    customOptions: OwlOptions = {
        mouseDrag: true,
        touchDrag: true,
        autoWidth: true,
        pullDrag: false,
        margin: 4,
        navSpeed: 700,
        autoplay: false,
        navText: ['', ''],
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2
            },
            960: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    }
    slidesStore = signal<any[]>([
        { id: 'slide-1', src: "logo_real.png" },
    ]);

}
