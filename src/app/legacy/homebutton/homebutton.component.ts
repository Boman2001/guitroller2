import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-homebutton',
  templateUrl: './homebutton.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./homebutton.component.css'],
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
`]
})
export class HomebuttonComponent {

  closeResult: string | undefined;



  constructor(private modalService: NgbModal) {}

  NgOnInit() {}

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
