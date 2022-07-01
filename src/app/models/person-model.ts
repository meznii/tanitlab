import {companyModel} from "./company-model";
// @ts-ignore
import {addresseModel} from "./addresseModel";

export class personModel {
  private _id: number;
  private _name: string;
  private _username: string;
  private _email: string;
  private _address: addresseModel ;
  private _phone: string;
  private _website: string;
  private _company: companyModel;
  constructor(id: number, name: string, username: string, email: string,
              addresse:addresseModel, phone: string, website:string, company:companyModel) {
    this._id = id;
    this._name = name;
    this._username = username;
    this._email = email;
    this._address = addresseModel;
    this._phone = phone;
    this._website = website;
    this._company = company
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get addresse(): addresseModel {
    return this._address;
  }

  set addresse(value: addresseModel) {
    this._address = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get company(): companyModel {
    return this._company;
  }

  set company(value: companyModel) {
    this._company = value;
  }

}
