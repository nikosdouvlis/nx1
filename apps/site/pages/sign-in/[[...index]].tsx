import React from 'react';
import { SignIn } from '@clerk/nextjs';
import type { NextPage } from 'next';

const SignInPage: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignIn routing={'path'} path={'/sign-in'}  signUpUrl={'/sign-up'} />
    </div>
  );
};

export default SignInPage;
