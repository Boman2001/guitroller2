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
export class SubwaysurfersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// tslint:disable-next-line:only-arrow-functions
(function() {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.leshylabs.com/apps/tuner/widget.js';
  document.body.appendChild(s);
})();
