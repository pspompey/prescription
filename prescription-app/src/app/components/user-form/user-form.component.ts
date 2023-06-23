import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [MdbModalService]
})
export class UserFormComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) { }

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        body: '¿Estás seguro?',
        cancel: 'No',
        success: 'Si',
      },
    });
  }

}
