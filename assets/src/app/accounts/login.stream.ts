import { SubjectWrapper } from '../signals/signal.helper';

import { User } from './accounts.model';

export class LoginStream extends SubjectWrapper<User> {}
