import { SubjectWrapper } from '../signals/signal.helper';

import { User } from './accounts.model';

export class UpdateUserStream extends SubjectWrapper<User> {}
