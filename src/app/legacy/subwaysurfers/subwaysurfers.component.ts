import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-subwaysurfers',
  templateUrl: './subwaysurfers.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./subwaysurfers.component.css'],
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class SubwaysurfersComponent {

  closeResult: string | undefined;



  constructor(private modalService: NgbModal) {}

  NgOnInit() {}

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}

