import { Auth, SignInForm, SignInFooter } from "@vintage/ui/layout";
import OAuthSignIn from "../o-auth-signin";
export default function Page() {
  return (
    <Auth
      signInOrUpComp={<SignInForm />}
      cardFooter={<SignInFooter />}
      title="Sign In"
      description="Choose your preferred sign in method"
      OAuthSignIn={<OAuthSignIn/>}
    />
  );
}
