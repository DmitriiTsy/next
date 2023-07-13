import NextAuth from "next-auth/next";

import GoogleProvider from 'next-auth/providers/google'

import { connectToDB } from '../../../../utils/database'

import User from '../../../../models/user'

console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {

    },
    async signIn({profile}) {
        try {
            await connectToDB()

            //check if user is existed

            //if not, create a new user 


            return true
        } catch(error) {
            console.error(error)
            return false
        }
    }

})

export { handler as GET, handler as POST }