export interface SignInFormProps {
  // onSubmit: (account: AccountTypes) => void;
  onSubmit: any;
  onGoogleSignIn: any;
  // error?: boolean;
  // isLoading?: boolean;
}
export interface AccountTypes {
  email: string;
  password: string;
}