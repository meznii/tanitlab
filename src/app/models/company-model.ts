
export class companyModel {
  private _catchPhrase: string;
  private _bs: string;



  constructor( catchPhrase: string, bs: string) {
    this._catchPhrase = catchPhrase;
    this._bs = bs;

  }



  get catchPhrase(): string {
    return this._catchPhrase;
  }

  set catchPhrase(value: string) {
    this._catchPhrase = value;
  }

  get bs(): string {
    return this._bs;
  }

  set bs(value: string) {
    this._bs = value;
  }
}
