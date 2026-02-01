import { LookupCity, LookupState, LookupCountry, LookupGender } from './api.models';

export interface UserProfileMaster {
  UserId: number;
  FirstName: string;
  LastName?: string;
  NickName: string;
  Gender?: number;
  City?: number;
  State?: number;
  Country?: number;
  RelationshipStatus?: number;
  Age?: number;
  DOB?: Date;
  Description?: string;
  GenderNavigation?: LookupGender;
  CityNavigation?: LookupCity;
  StateNavigation?: LookupState;
  CountryNavigation?: LookupCountry;
  UserPics?: UserPics;
};

export interface UserPics {
  UserId: number;
  ProfilePicName?: string;
  CoverPicName?: string;
  User?: UserProfileMaster;
  ProfilePic?: Uint8Array;
  CoverPic?: Uint8Array;
};