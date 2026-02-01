import { Component, signal, Input, input } from '@angular/core';
import { NgStyle, NgIf } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
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
  FormLabelDirective,
  AvatarComponent
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

import { UserProfileMaster } from './../../models/accounts.models';
import { ChatMaster, ChatRoomMaster, ChatRoomUserMapping } from './../../models/api.models';
import { AppService } from './../../app.services';
import { TDMessagesList, TDMegaPhoneShoutsList, TDChatRoomDetails, TDMembersList, TDUsersList } from './../../app.testdata';

@Component({
  selector: 'app-arenamainpanel',
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
    FormLabelDirective,
    AvatarComponent,
    HttpClientModule,
    AngularEditorModule
  ],
  templateUrl: './arenamainpanel.component.html',
  styleUrl: './arenamainpanel.component.scss'
})
export class ArenamainpanelComponent {

  constructor(private appService: AppService) {

  }

  icons = this.appService.getAppConstants().IconsService;

  readonly activeItem = signal(0);
  @Input() CurrentUserId: number | undefined;

  handleActiveItemChange(value: string | number | undefined) {
    this.activeItem.set(<number>value);
  }

  newMessage: string | undefined = "";
  htmlContent: string | undefined = "";

  readonly newMessageForm = new FormGroup({
    newMessageForm: new FormControl<string | undefined>("")
  });

  addNewMessage() {
    this.MessagesList.unshift({
      ChatRoomId: 1,
      Id: this.MessagesList.length + 1,
      Message: this.newMessage ?? "",
      MessageType: 1,
      ReplyTo: undefined,
      SentOn: new Date(),
      UserId: 2
    });
  };

  public MessagesList: ChatMaster[] = TDMessagesList;

  public MegaPhoneShoutsList: ChatMaster[] = TDMegaPhoneShoutsList;

  public ChatRoomDetails: ChatRoomMaster = TDChatRoomDetails;

  public MembersList: ChatRoomUserMapping[] = TDMembersList;

  public UsersList: UserProfileMaster[] = TDUsersList;

  public currentLanguage = navigator.language;
  public currentDate = new Date().toLocaleString(this.currentLanguage);
}
