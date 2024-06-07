import { ChangeDetectorRef, Component, Input, TemplateRef } from '@angular/core';
import { ProjectCardModel } from '../_models/projectCardModel';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subscription, combineLatest } from 'rxjs';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project = {} as ProjectCardModel;
  modalRef?: BsModalRef;
    
 
  constructor(private modalService: BsModalService, private changeDetection: ChangeDetectorRef) {}
 
  
  openModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    };
    
    this.modalRef = this.modalService.show(ProjectModalComponent);
  } 
 
  
}
