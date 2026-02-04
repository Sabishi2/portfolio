import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ProjectIcon } from './projects/project-icons/project-icon';
import { ProjectT } from './projects/project-type';
import { ProjectPage } from './projects/project-pages/project-page';

const p1: ProjectT = {
  name: "Ao Onidle",
  shortDescription: "Ao Oni guessing game website",
  longDescription: "Longer description",
  imageURL: "logo_real.png",
  public: true,
  linkToProject: "#"
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectIcon, ProjectPage, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio-site');
  project1 = p1;
}
