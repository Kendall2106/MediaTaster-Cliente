export interface Book {
    id: any;
    media_name: any;
    score: any;
    type: any;
    date: any;
  }

export class Book implements Book {
  constructor(public id: any, public media_name: any, public score: any, public type: any, public date: any) {};
}