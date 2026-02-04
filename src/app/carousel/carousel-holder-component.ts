import { Component, signal } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    standalone: false,
    selector: 'carousel-holder-component',
    templateUrl: './carousel-holder.html',
    styleUrl: './carousel-holder.scss'
})


export class CarouselHolderComponent {
    customOptions: OwlOptions = {
        loop: true,
        items: 1,
        mouseDrag: true,
        touchDrag: true,
        center: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        autoplaySpeed: 700,
        autoplay: true,
        navText: ['', ''],
        nav: true
    }
    slidesStore = signal<any[]>([
        { id: 'slide-1', src: "Ao_Onidle/1.png" },
        { id: 'slide-2', src: "Ao_Onidle/2.png" },
    ]);
}
