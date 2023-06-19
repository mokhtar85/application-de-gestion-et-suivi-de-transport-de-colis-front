import { Component, Inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-success-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Success!</h4>
      <button type="button" class="close" aria-label="Close" (click)="modalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>The package has been successfully assigned.</p>
    </div>
  `
})
export class SuccessModalComponent {
  constructor(@Inject(BsModalRef) public modalRef: BsModalRef) { }
}