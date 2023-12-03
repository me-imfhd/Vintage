import { Button, Input, Label } from '@vintage/shadcn'
import React from 'react'

export function SignInForm() {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <Button className="w-full">
        Sign In
      </Button>
    </>
  )
}
