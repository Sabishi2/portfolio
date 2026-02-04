import { Component, input } from '@angular/core';
import { ProjectT } from '../project-type';

@Component({
    selector: 'project-icon',
    templateUrl: './project-icon.html',
    styleUrl: './project-icon.scss'
})

export class ProjectIcon {
    project = input.required<ProjectT>();
}
