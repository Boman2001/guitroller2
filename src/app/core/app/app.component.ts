import { Component } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App'

  closeResult: string | undefined;

  constructor(private modalService: NgbModal) {}

  NgOnInit() {}

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true, size: 'xl' });

  }

}
