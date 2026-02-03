import { Component, input } from '@angular/core';
import { Project } from '../project';

@Component({
    selector: 'project-page',
    templateUrl: './project-page.html',
    styleUrl: './project-page.scss'
})


export class ProjectPage {
    project = input.required<Project>();
}
