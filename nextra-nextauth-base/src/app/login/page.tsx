import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/app/login/login-form"
import { NextPage } from "next"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

const AuthenticationPage: NextPage = () => {
  const words = `This is Next.js UI Base. It is a collection of components and utilities for building a web application.`
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Next.js UI Base
          </div>
          <div className="relative z-20 mt-auto">
            <TextGenerateEffect className="text-white" words={words} />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your userid and password below to continue.
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthenticationPage;