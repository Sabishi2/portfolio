import { Component, signal } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { input, computed } from '@angular/core';

@Component({
    standalone: false,
    selector: 'pp-carousel-holder-component',
    templateUrl: './pp-carousel-holder.html',
    styleUrl: './pp-carousel-holder.scss'
})


export class PPCarouselHolderComponent {

    createSlidesStore() {
        let slideStoreTemp = [];
        for (let i = 0; i < this.screenshotFilenames().length; i++) {
            slideStoreTemp.push({
                id: `slide-${i + 1}`, src: `${this.screenshotFolder()}${this.screenshotFilenames()[i]}`
            })
        }
        return slideStoreTemp;
    }

    customOptions: OwlOptions = {
        loop: true,
        items: 1,
        autoWidth: true,
        autoHeight: false,
        dots: false,
        navSpeed: 700,
        autoplaySpeed: 700,
        autoplay: true,
        navText: ['', ''],
        nav: true
    }

    screenshotFolder = input.required<string>();
    screenshotFilenames = input.required<Array<string>>();
    customOptionsInput = input<OwlOptions>();

    slidesStore = signal<any[]>([{ id: 'slide1' }]);
    ngOnInit() {

        this.slidesStore = signal<any[]>(this.createSlidesStore());
        this.customOptions = { ...this.customOptions, ...this.customOptionsInput() }

    }

}
