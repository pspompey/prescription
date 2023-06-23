import { Component, Input } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  @Input()
  isPresentation: boolean | null = true;

}
