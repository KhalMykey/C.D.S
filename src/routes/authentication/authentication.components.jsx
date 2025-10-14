import { AuthenticationContainer } from "./authentication.styles";
import { Fragment } from "react";
import SignInForm from "../../components/signInForm/signInForm.components";
import SignUpForm from "../../components/signUpForm/signUpForm.components";
import Banner from "../../components/banner/banner.components";

const Authentication = () => {
  return (
    <Fragment>
      <Banner />
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </Fragment>
  );
};

export default Authentication;
