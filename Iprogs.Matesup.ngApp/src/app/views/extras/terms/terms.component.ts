import { Component } from '@angular/core';
import { TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';

@Component({
  selector: 'app-terms',
  imports: [
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
  ],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})
export class TermsComponent {

}
