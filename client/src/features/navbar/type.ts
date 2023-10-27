export type   State = {
    user: User | null
    errorMessage: string
  }
  
  export type User = {
    id: number
    login: string
    password: string
    score:number
  }