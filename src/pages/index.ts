import {Router} from '../core/Router';
import {view as IndexPage} from './main';
import {view as SignInPage} from './signin';
import {view as SignUpPage} from './signup';
import {view as ProfilePage} from './profile';
import {view as ProfileEditPage} from './profile_edit';
import {view as ProfilePassPage} from './profile_newpass';
import {view as ChatsPage} from './chats';
import {view as NotFoundPage} from './404';
import {view as ServerErrorPage} from './500';

Router.registerRoutes({
  '/5\\d\\d': ServerErrorPage,
  '/menu': IndexPage,
  '/': SignInPage,
  '/sing-up': SignUpPage,
  '/settings': ProfilePage,
  '/settings/edit': ProfileEditPage,
  '/settings/password': ProfilePassPage,
  '/messenger': ChatsPage,
});

Router.registerNotFound({'/404': NotFoundPage});

Router.navigate(location.pathname);
