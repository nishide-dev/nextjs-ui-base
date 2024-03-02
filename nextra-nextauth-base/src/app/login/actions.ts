// 'use server'

import { signIn } from "next-auth/react"

export async function authenticate(prevState: boolean, formData: FormData) {
  try {
    await signIn('credentials', { ...Object.fromEntries(formData), callbackUrl: '/' })
    return true
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return false
    }
    throw error
  }
}