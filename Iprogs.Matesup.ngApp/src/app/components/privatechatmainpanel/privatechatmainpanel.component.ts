import { Component, signal } from '@angular/core';
import { NgStyle, NgIf } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import {
  ContainerComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardFooterComponent,
  ColComponent,
  RowComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent,
  ButtonDirective,
  TableDirective,
  TableColorDirective,
  TableActiveDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  FormLabelDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { AppService } from './../../app.services';

@Component({
  selector: 'app-privatechatmainpanel',
  imports: [
    ContainerComponent,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    ColComponent,
    RowComponent,
    TabDirective,
    TabPanelComponent,
    TabsComponent,
    TabsContentComponent,
    TabsListComponent,
    IconDirective,
    ReactiveFormsModule,
    FormsModule,
    ButtonDirective,
    NgStyle,
    NgIf,
    TableDirective,
    TableColorDirective,
    TableActiveDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    FormLabelDirective
  ],
  templateUrl: './privatechatmainpanel.component.html',
  styleUrl: './privatechatmainpanel.component.scss'
})
export class PrivatechatmainpanelComponent {

  constructor(private appService: AppService) {

  }
  
  readonly activeItem = signal(0);

  handleActiveItemChange(value: string | number | undefined) {
    this.activeItem.set(<number>value);
  }

  icons = this.appService.getAppConstants().IconsService;
}
