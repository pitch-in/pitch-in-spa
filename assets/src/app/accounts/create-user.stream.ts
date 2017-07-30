import { SubjectWrapper } from '../signals/signal.helper';

import { User } from './accounts.model';

export class CreateUserStream extends SubjectWrapper<User> {}
