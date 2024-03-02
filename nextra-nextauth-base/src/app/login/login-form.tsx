"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authenticate } from "./actions"
import { useFormState, useFormStatus } from 'react-dom'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [state, formAction] = useFormState(authenticate, true)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form action={formAction}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="Id">
                UserId
            </Label>
            <Input
              id="Id"
              name="id"
              placeholder="User ID"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="Password">
                Password
            </Label>
            <Input
              id="Password"
              name="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
            //   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                <div className="">loading</div>
            )}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}