import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectCardModel } from '../_models/projectCardModel';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {

  @Input() project = {} as ProjectCardModel;
  
  constructor(private modalService: BsModalService, public modalRef: BsModalRef, private changeDetection: ChangeDetectorRef){

  }
}
