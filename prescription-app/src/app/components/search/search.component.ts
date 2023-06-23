import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [MdbModalService]
})
export class SearchComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) { }

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        body: '¿Está seguro de realizar la operación?',
        cancel: 'Cancelar',
        success: 'Confirmar',
      },
    });
  }
}
