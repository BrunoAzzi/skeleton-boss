export interface IAccount {
  title: string;
  type: string;
}

export class Account implements IAccount {
  type: string;
  title: string;

  constructor()
  constructor(data: IAccount)
  constructor(data?: any) {
    this.type = data && data.type || 'Caixa';
    this.title = data && data.title || '';
  }
}
