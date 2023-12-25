import type { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "enter your username",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "enter your password",
                },
            },
            async authorize(credentials){
                const user = {id:'1001', name:"dhruv", password:'dhruv'};
                if(user.name === credentials?.username && user.password === credentials?.password){
                    return user;
                }else{
                    return null;
                }
            },
        }),
    ]
};