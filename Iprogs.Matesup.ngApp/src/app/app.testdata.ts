import { UserProfileMaster } from './models/accounts.models';
import { ActiveUserModel } from './app.models';
import { ChatMaster, ChatRoomMaster, ChatRoomUserMapping } from './models/api.models';

export const TDMessagesList: ChatMaster[] = [
  { ChatRoomId: 1, Id: 2, Message: 'Test Message 2', MessageType: 1, ReplyTo: undefined, SentOn: new Date(2025, 5, 19, 23, 19, 0, 0), UserId: 2 },
  { ChatRoomId: 1, Id: 1, Message: 'Test Message 1', MessageType: 1, ReplyTo: undefined, SentOn: new Date(2025, 5, 19, 23, 18, 0, 0), UserId: 1 }
];

export const TDMegaPhoneShoutsList: ChatMaster[] = [
  { ChatRoomId: 1, Id: 2, Message: ' entered the MatesUp Arena', MessageType: 1, ReplyTo: undefined, SentOn: new Date(2025, 5, 19, 23, 19, 0, 0), UserId: 2 },
  { ChatRoomId: 1, Id: 1, Message: ' entered the MatesUp Arena', MessageType: 1, ReplyTo: undefined, SentOn: new Date(2025, 5, 19, 23, 18, 0, 0), UserId: 1 },
];

export const TDChatRoomDetails: ChatRoomMaster = {
  ChatRoomName: "MatesUp Arena",
  ChatRoomPrivacy: 1,
  ChatRoomType: 1,
  CreatedBy: 1,
  CreatedOn: new Date(2025, 1, 1, 0, 0, 0, 0),
  Description: 'MatesUp Arena',
  Id: 1,
  IsActive: true,
  LastMessageOn: new Date(2025, 6, 19, 23, 19, 0, 0),
  PasswordChangedOn: undefined,
  PasswordHash: undefined,
  RoomOwnerId: 1
};

export const TDMembersList: ChatRoomUserMapping[] = [
  { ChatRoomId: 1, Id: 1, LastSeen: new Date(2025, 6, 19, 23, 18, 0, 0), UserId: 1 },
  { ChatRoomId: 1, Id: 2, LastSeen: new Date(2025, 6, 19, 23, 18, 0, 0), UserId: 2 }
];

export const TDUsersList: UserProfileMaster[] = [
  { Age: 32, City: 19210, Country: 101, State: 1659, Description: 'MatesUp Admin', DOB: undefined, FirstName: 'MatesUp', Gender: 1, LastName: 'Admin', NickName: 'matesupadmin', RelationshipStatus: 1, UserId: 1 },
  { Age: 32, City: 19210, Country: 101, State: 1659, Description: 'MatesUp Arena', DOB: undefined, FirstName: 'MatesUp', Gender: 1, LastName: 'Arena', NickName: 'matesuparena', RelationshipStatus: 1, UserId: 2 }
];
