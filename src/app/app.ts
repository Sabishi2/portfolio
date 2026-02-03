import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectIcon } from './projects/project-icons/project-icon';

const p1 = {
  name: "Ao Onidle",
  shortDescription: "Ao Oni guessing game website",
  imageUrl: "logo_real.png"
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio-site');
  project = p1;
}
