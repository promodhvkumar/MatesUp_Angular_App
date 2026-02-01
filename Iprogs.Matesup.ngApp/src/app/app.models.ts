import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { UserProfileMaster } from './models/accounts.models';
import { UserModalModel  } from './models/api.models';

export interface UserContext {
    UserId: number;
    UserProfile: UserModalModel;  
};

export interface SessionContext {
  accessToken: string;
  tokenType: string,
  expiresIn: number,
  refreshToken: string
};

export interface ActiveUserModel {
  name: string,
  id: number,
  gender?: string,
  available: string,
  verified: boolean,
  country?: string,
  city?: string,
  state?: string,
  age: number,
  avatarUrl: string,
  selected: boolean,
  UserMaster: UserProfileMaster
}

// export interface UserContext {
//     UserId: number;
//     UserProfile: UserModalModel;  
// };

export interface GenderVM {
    id: number;
    name: string;
    color: string;
    icon: IconDefinition;
};

export interface UserVerificationVM {
  id: number;
  name: string;
  color: string;
  icon: IconDefinition;
};

export interface UserOnlineStatusVM {
  id: number;
  name: string;
  color: string;
  icon: IconDefinition;
};

export interface UsersListVM {
  UserId: number;
  UserProfile: UserProfileMaster;
  Gender?: GenderVM;
  UserVerified?: UserVerificationVM;
  UserOnline?: UserOnlineStatusVM;
};