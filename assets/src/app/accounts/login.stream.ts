import { SubjectWrapper } from '../signals/signal.helper';

import { LoginCredentials } from './accounts.model';

export class LoginStream extends SubjectWrapper<LoginCredentials> {}
