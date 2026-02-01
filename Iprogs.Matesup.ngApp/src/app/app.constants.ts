import { inject, Injectable } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import {
  cilBank, cilBullhorn, cilCommentBubble, cilSend, cilAudio, cilCamera, cilVideo, cilClone, cilSave,
  cilCheckCircle, cilUser, cilUserFemale, cilAsteriskCircle, cifIn, cilCircle, cilContrast, cilGroup,
  cilContact, cibMicrosoft
} from '@coreui/icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCertificate, faCheckCircle, faFemale, faGenderless, faM, faMale, faPerson, faTransgender, faUser, faUserShield, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { LookupGender } from './models/api.models';
import { GenderVM, UserOnlineStatusVM, UserVerificationVM } from './app.models';

@Injectable({ providedIn: 'root' })
export class AppConstants {

  constructor() {

  }

  IconsService = {
    cilBank,
    cilBullhorn,
    cilCommentBubble,
    cilSend,
    cilAudio,
    cilCamera,
    cilVideo,
    cilClone,
    cilSave,
    cilCheckCircle,
    cilUser,
    cilUserFemale,
    cilAsteriskCircle,
    cifIn,
    cilCircle,
    cilContrast,
    cilGroup,
    cilContact,
    cibMicrosoft
  };

  FaIcons = {
    faMale,
    faFemale,
    faTransgender,
    faGenderless,
    faUser,
    faPerson,
    faCertificate,
    faUserShield,
    faUserTimes,
    faCheckCircle
  };

  GendersList: GenderVM[] = [
    { id: 0, name: 'All', color: "gray", icon: this.FaIcons.faPerson },
    { id: 1, name: 'Male', color: "blue", icon: this.FaIcons.faMale },
    { id: 2, name: 'Female', color: "magenta", icon: this.FaIcons.faFemale },
    { id: 3, name: 'Trans/ Others', color: "pink", icon: this.FaIcons.faTransgender },
    { id: 4, name: 'Not mentioned', color: "gray", icon: this.FaIcons.faGenderless }
  ];

  UserVerificationStatusList: UserVerificationVM[] = [
    { id: 0, name: 'All', icon: this.FaIcons.faUser, color: "gray" },
    { id: 1, name: 'Verified', icon: this.FaIcons.faUserShield, color: "online" },
    { id: 2, name: 'Unverified', icon: this.FaIcons.faUserTimes, color: "gray" }
  ];

  UserOnlineStatusList: UserOnlineStatusVM[] = [
    { id: 0, name: 'All', color: "gray", icon: this.FaIcons.faCheckCircle  },
    { id: 1, name: 'Online', color: "online", icon: this.FaIcons.faCheckCircle },
    { id: 2, name: 'Away', color: "away", icon: this.FaIcons.faCheckCircle },
    { id: 3, name: 'Offline', color: "offline", icon: this.FaIcons.faCheckCircle }
  ];

  GetGender(id: number) {
    return this.GendersList.filter((gender) => gender.id === id);
  };

  GetUserVerStatus(id: number) {
    return this.UserVerificationStatusList.filter((verify) => verify.id === id)[0];
  };

  GetUserOnlineStatus(id: number) {
    return this.UserOnlineStatusList.filter((status) => status.id === id)[0];
  };

};
