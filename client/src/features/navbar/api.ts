/* eslint-disable import/prefer-default-export */
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