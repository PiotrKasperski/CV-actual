import {Component, OnInit} from '@angular/core';

interface ProjectItems {
  name: string;
  description: string;
  github?: string;
  url?: string;
}

@Component({
  selector: 'app-pojects',
  templateUrl: './pojects.component.html',
  styleUrls: ['./pojects.component.scss']
})
export class PojectsComponent implements OnInit {
  projects: Array<ProjectItems> = [{
    name: 'project.restrand.name',
    description: 'project.restrand.description',
    github: 'https://github.com/PiotrKasperski/Restrand',
    url: 'homepage'

  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
