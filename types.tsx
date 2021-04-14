export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Main: undefined;
  Rules: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string;
  name: string;
  imageUri: string;
  status: String;
}

export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: User;
}

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
}

