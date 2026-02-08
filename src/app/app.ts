import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ProjectIcon } from './projects/project-icons/project-icon';
import { ProjectT } from './projects/project-type';
import { ProjectPage } from './projects/project-pages/project-page';
import { PICarouselHolderModule } from './projects/project-icons/pi-carousel/pi-carousel-holder-module';
import projects_json from "../assets/projects.json"

const projects: Array<ProjectT> = projects_json["projects"];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectPage, RouterModule, PICarouselHolderModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  itemClicked = (idToHighlight: number) => {
    this.highlightedProject = idToHighlight;
  }
  highlightCallback = (projectId: number) => {
    this.highlightedProject = projectId;
  }
  highlightedProject = 1;
  protected readonly title = signal('Portfolio-site');
  projects = projects;
}
