import { Component, input } from '@angular/core';
import { Project } from '../project';

@Component({
    selector: 'project-icon',
    templateUrl: './project-icon.html',
    styleUrl: './project-icon.scss'
})

export class ProjectIcon {
    name = input.required<string>();
    shortDescription = input.required<string>();
    imageURL = input.required<string>();
}
