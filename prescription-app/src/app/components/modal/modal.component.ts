import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  body: string | null = null;
  cancel:  string | null = null;
  success: string | null = null;

  constructor(public modalRef: MdbModalRef<ModalComponent>) {}
}