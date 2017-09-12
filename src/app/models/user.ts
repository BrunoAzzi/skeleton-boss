export class IUser {
  uid: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  avatar: string;
  password: string;
  company: string;
}

export class User implements IUser{
  uid: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  avatar: string;
  password: string;
  company: string;

  constructor()
  constructor(data: IUser)
  constructor(data?: any) {
    this.name = data && data.name || null;
    this.type = data && data.type || 'regular';
    this.email = data && data.email || null;
    this.uid = data && data.uid || null;
    this.phone = data && data.phone || null;
    this.avatar = data && data.avatar || null;
    this.password = data && data.password || null;
    this.company = data && data.company || null;
  }
}
