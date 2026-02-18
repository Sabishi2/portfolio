import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ProjectT } from './projects/project-type';
import { ProjectPage } from './projects/project-pages/project-page';
import { PICarouselHolderModule } from './projects/project-icons/pi-carousel/pi-carousel-holder-module';
import projects_json from "../assets/projects.json"
import { SetionNav } from './section-navigation/section-navigation';
import { NavButton } from './section-navigation/nav-button/nav-button';

const projects: Array<ProjectT> = projects_json["projects"];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectPage, RouterModule, PICarouselHolderModule, SetionNav, NavButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  projectClicked = (idToHighlight: number) => {
    this.highlightedProject = idToHighlight;
  }
  highlightCallback = (projectId: number) => {
    this.highlightedProject = projectId;
  }

  navigateClicked = (section: number) => {
    this.currentSection = section;
  }

  getSectionClass = (section: number) => {
    if (this.currentSection == section) {
      return 'enabled';
    }
    return 'disabled';
  }

  sectionsList = ['Projects', 'About', 'Certifications'];
  currentSection = 0; // Default value of projects
  highlightedProject = 1;
  protected readonly title = signal('Portfolio-site');
  projects = projects;
}
