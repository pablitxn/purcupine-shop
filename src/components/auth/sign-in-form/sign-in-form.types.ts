import { ChangeEvent } from "react"

export type User = {
  username: string
  password: string
}

export type HandleChange = (event: ChangeEvent<HTMLInputElement>) => void

export interface ISignInForm {
  onSubmit: ({ username, password }: User) => void
  forgotPassButton: () => void
  onSignInGoogle: () => void
}
