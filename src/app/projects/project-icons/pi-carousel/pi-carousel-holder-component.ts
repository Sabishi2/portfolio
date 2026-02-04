import { Component, signal, input } from '@angular/core';
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
    projects = input.required<Array<ProjectT>>()
    customOptions: OwlOptions = {
        loop: false,
        items: 4,
        mouseDrag: true,
        touchDrag: true,
        center: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        autoplaySpeed: 700,
        autoplay: false,
        navText: ['', ''],
        nav: true
    }
    slidesStore = signal<any[]>([
        { id: 'slide-1', src: "logo_real.png" },
    ]);
}
