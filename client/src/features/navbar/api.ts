/* eslint-disable import/prefer-default-export */

import { User } from "./type"

/* eslint-disable @typescript-eslint/no-unsafe-return */
export const logoutFetch = async (): Promise<{ message: string }> => {
    try {
      const logoutData = await (await fetch('/api/auth/logout')).json()
      return logoutData
    } catch ({ error }) {
      console.log('Ошибка при выходе из системы')
      return error
    }
  }


  export const CheckFetch = async (): Promise<User> => {
    try {
      const data = await (await fetch('/api/auth/user-check')).json()
      return data
    } catch ({ error }) {
      console.log('Ошибка')
      return error
    }
  }