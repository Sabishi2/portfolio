import { Component, input } from '@angular/core';
import { ProjectT } from '../project-type';
import { PPCarouselHolderModule } from './pp-carousel/pp-carousel-holder-module';

@Component({
    imports: [PPCarouselHolderModule],
    selector: 'project-page',
    templateUrl: './project-page.html',
    styleUrl: './project-page.scss'
})


export class ProjectPage {
    project = input.required<ProjectT>();
    index = input.required<number>();
}
