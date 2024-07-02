import { Injectable } from '@angular/core';
import { Tags } from '../_models/Tags';
import { ProjectCardModel } from '../_models/projectCardModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  project: ProjectCardModel[] = [
    {
      id: 0,
      name: 'Sample Angular App',
      summary: 'This is a summary of the project',
      description: 'This is the description of the project.',
      projectLink: 'Link',
      pictures: [],
      tags: [Tags.ANGULAR, Tags.TYPESCRIPT]
    },
    {
      id: 1, 
      name: "Sample Angular App", 
      pictures: [], 
      projectLink: "//www.github.com", 
      summary: "Fullstack web app developed using Angular and Node.JS", 
      description: "Description", 
      tags: [Tags.ANGULAR, Tags.TYPESCRIPT, Tags.NODEJS]
    },
    {
      id: 2, 
      name: "Sample .Net App", 
      pictures: [], 
      projectLink: "//www.github.com", 
      summary: "Fullstack web app developed using React and ASP.NET", 
      description: "Description", 
      tags: [Tags.CSHARP, Tags.NET]
    },
    {id: 3, 
      name: "Web API Project", 
      pictures: [], 
      projectLink: "//www.github.com", 
      summary: "Web API Project that was developed for a class project.", 
      description: "Description", 
      tags: [Tags.CSHARP, Tags.NET]
    },
    {id: 4, 
      name: "Chrome Extension", 
      pictures: [], 
      projectLink: "//www.github.com", 
      summary: "Developed a chrome extension that tracks the prices of furniture.", 
      description: "Description", 
      tags: [Tags.JAVASCRIPT]
    },
    {id: 5, 
      name: "Mobile App", 
      pictures: [], 
      projectLink: "//www.github.com", 
      summary: "Mobile app developed in java that tracks the departure and arrival of trains.", 
      description: "Description", 
      tags: [Tags.JAVA, Tags.SPRINGBOOT, Tags.SQL]
    }
  ];

  constructor() { }

  GetProjects(){
    return this.project;
  }

  GetProjectById(id: number) : ProjectCardModel{
    let project = this.project.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('There is no project that matches ID: ' + id);
    }

    return project;
  }
}
