export interface Movie {
    id: any;
    name: any;
    score: any;
    type: any;
    date: any;
  }

export class Movie implements Movie {
  constructor(public id: any, public name: any, public score: any, public type: any, public date: any) {};
}