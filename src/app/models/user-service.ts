import { UserInfo } from './user-info';

export interface UserService {
  getUserInfo(): UserInfo;
  isMentorAdmin: boolean;
  existsUser(email: string): boolean;
  isLogged(): boolean;
}
