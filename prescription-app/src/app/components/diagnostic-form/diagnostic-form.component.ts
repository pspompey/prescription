import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diagnostic-form',
  templateUrl: './diagnostic-form.component.html',
  styleUrls: ['./diagnostic-form.component.scss']
})
export class DiagnosticFormComponent {
  @Input()
  isPrescription: boolean | null = true;

}
