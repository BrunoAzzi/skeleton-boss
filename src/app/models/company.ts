export class ICompany {
  logo: string;
  name: string;
}

export class Company implements ICompany{
  logo: string;
  name: string;

  constructor()
  constructor(data: ICompany)
  constructor(data?: any) {
    this.name = data && data.name || null;
    this.logo = data && data.logo || null;
  }
}
