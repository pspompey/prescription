import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prescription-view',
  templateUrl: './prescription-view.component.html',
  styleUrls: ['./prescription-view.component.scss']
})
export class PrescriptionViewComponent {

  @Input() image = '';
}
