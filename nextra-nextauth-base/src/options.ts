import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          id: {
            label: 'Id',
            type: 'text',
          },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials, req) {
          // credentials に入力が渡ってくる
          // id, password はここでベタ打ちして検証している
          const matched =
            credentials?.id === process.env.ID && 
            credentials?.password === process.env.PASSWORD
          if (matched) {
            // 今回は null を返さなければなんでもよいので適当
            console.log('matched')
            return {
              id: '29472084752894723890248902',
            }
          } else {
            return null
          }
        },
      }),
    ],
    callbacks: {
        async jwt({token, user, account, profile}){
          if (user) {
            token.user = user;
            const u = user as any
            token.role = u.role
          }
          if (account) {
            token.accessToken = account.access_token
          }
          return token
        },
        async session({ session, token, user}) {
          token.accessToken
          session.user = token.user as any
          return {
            ...session,
            user: {
              ...session.user,
              role: token.role
            }
          }
        }
    },
    pages: {
      signIn: '/login',
    },
}