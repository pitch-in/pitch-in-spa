export interface User {
  name: string;
  email: string;
  pro?: Pro;
}

export interface Pro {
  phone: string;
}
