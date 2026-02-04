import { Component, input } from '@angular/core';
import { ProjectT } from '../project-type';
import { CarouselHolderModule } from '../../carousel/carousel-holder-module';

@Component({
    imports: [CarouselHolderModule],
    selector: 'project-page',
    templateUrl: './project-page.html',
    styleUrl: './project-page.scss'
})


export class ProjectPage {
    project = input.required<ProjectT>();
    index = input.required<number>();
}
