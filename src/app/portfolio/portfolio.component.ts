import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { ProjectCardModel } from '../_models/projectCardModel';
import { Tags } from '../_models/Tags';
import { ProjectsService } from '../_service.ts/projects.service';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css',
    imports: [ProjectCardComponent]
})
export class PortfolioComponent implements OnInit{

  project: ProjectCardModel[] = [];


  constructor(private titleService: Title, private projectService: ProjectsService)
  {
    this.titleService.setTitle('Steven Hansen - Portfolio');

  }
  ngOnInit(): void {
    this.project = this.projectService.GetProjects();
  }

}
