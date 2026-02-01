import { UserProfileMaster, UserPics } from './accounts.models';

/* Common Lookup Models */

export interface LookupGender {
  Id: number;
  Gender: string;
  GenderIcon?: string;
  IsActive: boolean;
};

export interface LookupCountry {
  ID: number;
  Name: string;
  CountryCode: string;
};

export interface LookupState {
  ID: number;
  Name: string;
  CountryID: number;
};

export interface LookupCity {
  ID: number;
  Name: string;
  StateID: number;
};

export interface LookupChatRoomType {
    Id: number;
    ChatRoomType: string;
    IsActive: boolean;
    Description?: string;
    NeedPassword: boolean;
};

export interface LookupChatRoomPrivacy {
    Id: number;
    ChatRoomPrivacy: string;
    IsActive: boolean;
    Description?: string;
};

/* View Models */

export interface ChatMessageModel {
    ChatRoomId: number;
    Message: string;
};

export interface NewChatRoomModel {
    ChatRoomId: number;
    ChatRoomName: string;
    Description: string;
    Password: string;
    ChatRoomPrivacy: number;
    ChatRoomType: number;
};

export interface TextModel {
    Content: string;
};

export interface UserModalModel {
  UserId: number;
  FirstName: string;
  LastName: string;
  NickName: string;
  Gender: number;
  Description?: string;
  DOB?: Date;
  VerifiedUser: boolean;
  Online: boolean;
  IsBlocked: boolean;
  YouBlocked: boolean;
  Followers: number;
  Following: number;
  IsFollowing: boolean;
  GenderNavigation?: LookupGender;
  CountryNavigation?: LookupCountry;
  StateNavigation?: LookupState;
  CityNavigation?: LookupCity;
};

export interface RoomModalModel {
    Id: number;
    ChatRoomName: string;
    RoomOwnerId: number;
    Description: string;
    NeedPassword: boolean;
    PasswordProtected: boolean;
    ActiveUsers: number;
    TotalUsers: number;
    RoomPrivacy: number;
    RoomType: number;
    IsBlocked: boolean;
    IsRoomOwner: boolean;
    Moderator: boolean;
    AlreadyMember: boolean;
    UserAccess: ChatRoomAccessModel;
};

export interface ChatRoomAccessModel {
    ChatRoomId: number;
    IsAdmin: boolean;
    IsRoomOwner: boolean;
    IsModerator: boolean;
    IsActiveUser: boolean;
};

export interface ChatMessageModel {
    Id: number;
    UserId: number;
    ChatRoomId: number;
    Message: string;
    SentOn: Date;
    IsNew: boolean;
    UserProfileMaster: UserModalModel;
};

export interface AnnouncementsModel {
    Id: number;
    UserId: number;
    ChatRoomId: number;
    Announcement: string;
    SentOn: Date;
    IsNew: boolean;
    UserProfileMaster: UserModalModel;
    NewRoom: RoomModalModel;
};

export interface PrivateChatRoomModel {
    ChatRoomId: number;
    LastMessageOn: Date;
    NewMessageCount: number;
    RoomName: string;
    IsBlocked: boolean;
    YouBlocked: boolean;
};

export interface UserSearchModel {
    SearchTerm: string;
    Gender: number;
    OnlyOnline: boolean;
    OnlyVerifiedUsers: boolean;
};

export interface RoomSearchModel {
    SearchTerm: string;
    SkipAlreadyOwned: boolean;
    SkipAlreadyJoined: boolean;
};

export interface UserContext {
    UserId: number;
    UserProfile: UserModalModel;
};

export interface ResponseModel {
    status?: string;
    responseText?: string;
    Data?: any;
    Validation?: boolean;
};

/* ChatRoom Models */

export interface ChatRoomMaster {
    Id: number;
    ChatRoomName?: string;
    ChatRoomType: number;
    ChatRoomPrivacy: number;
    CreatedBy: number;
    RoomOwnerId: number;
    CreatedOn: Date;
    IsActive: boolean;
    LastMessageOn: Date;
    Description?: string;
    PasswordHash?: string;
    PasswordChangedOn?: Date;
    ChatRoomPrivacyNavigation?: LookupChatRoomPrivacy;
    ChatRoomTypeNavigation?: LookupChatRoomType;
    ChatRoomUserMapping?: ChatRoomUserMapping[];
    CreatedByNavigation?: UserProfileMaster;
    RoomOwner?: UserProfileMaster;
};

export interface ChatRoomUserMapping {
    Id: number;
    ChatRoomId: number;
    UserId: number;
    LastSeen?: Date;
    ChatRoom?: ChatRoomMaster;
    User?: UserProfileMaster;
};

export interface ChatRoomBlockedUsers {
    Id: number;
    ChatRoomId: number;
    BlockedUserId: number;
    BlockedBy: number;
    BlockedOn: Date;
    BlockedByNavigation?: UserProfileMaster;
    BlockedUser?: UserProfileMaster;
    ChatRoom?: ChatRoomMaster;
};

export interface MegaPhoneMaster {
    Id: number;
    ChatRoomId: number;
    UserId: number;
    Announcement: string;
    SentOn: Date;
    NewChatRoomId?: number;
    ChatRoom?: ChatRoomMaster;
    NewChatRoom?: ChatRoomMaster;
    User?: UserProfileMaster;
};

/* Chat Models */

export interface ChatMaster {
    Id: number;
    UserId: number;
    ChatRoomId: number;
    Message: string;
    SentOn: Date;
    MessageType: number;
    ReplyTo?: number;
    ChatRoom?: ChatRoomMaster;
    ReplyToNavigation?: ChatMaster;
    User?: UserProfileMaster;
    ChatMasterAttachments?: ChatMasterAttachments[];
};

export interface ChatMasterAttachments {
    Id: number;
    AttachmentName: string;
    FileName?: string;
    FileExtn?: string;
    Attachment: Uint8Array;
    ChatId: number;
    CreatedOn: Date;
    IsActive: boolean;
    Chat?: ChatMaster;
};
