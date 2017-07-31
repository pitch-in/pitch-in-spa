export interface User {
  name: string;
  email: string;
  pro?: Pro;
}

export interface Pro {
  phone: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
