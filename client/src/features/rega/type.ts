export type User = {
    id: number;
    login: string;
    password: string;
    score:number;
  };
  
  export type UserID = User['id'];
  
  export type AddUser = {
    login: string;
    password: string;
  };