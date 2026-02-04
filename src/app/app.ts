import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ProjectIcon } from './projects/project-icons/project-icon';
import { ProjectT } from './projects/project-type';
import { ProjectPage } from './projects/project-pages/project-page';
import { PICarouselHolderModule } from './projects/project-icons/pi-carousel/pi-carousel-holder-module';

const p1: ProjectT = {
  id: 1,
  name: "Ao Onidle",
  shortDescription: "Ao Oni guessing game website",
  longDescription: "Longer description",
  imageURL: "logo_real.png",
  public: true,
  linkToProject: "#"
}
const p2: ProjectT = {
  id: 2,
  name: "bileet",
  shortDescription: "Ao Oni guessing game website",
  longDescription: "Longer description",
  imageURL: "Ao_Onidle/1.png",
  public: true,
  linkToProject: "#"
}
const p3: ProjectT = {
  id: 3,
  name: "XD",
  shortDescription: "Ao Oni guessing game website",
  longDescription: "Longer description",
  imageURL: "logo_real.png",
  public: true,
  linkToProject: "#"
}
const p4: ProjectT = {
  id: 4,
  name: "Joo",
  shortDescription: "Ao Oni guessing game website",
  longDescription: "Longer description",
  imageURL: "logo_real.png",
  public: true,
  linkToProject: "#"
}
const p5: ProjectT = {
  id: 5,
  name: "Juu",
  shortDescription: "Ao Oni guessing game website",
  longDescription: "Longer description",
  imageURL: "Ao_Onidle/1.png",
  public: true,
  linkToProject: "#"
}
const projects: Array<ProjectT> = [p1, p2, p3, p4, p5];

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
