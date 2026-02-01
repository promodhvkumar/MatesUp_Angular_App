import { Component } from '@angular/core';
import { TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';

@Component({
  selector: 'app-privacy',
  imports: [
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

}
