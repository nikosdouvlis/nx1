import { SignUp } from '@clerk/nextjs';
import type { NextPage } from 'next';
import React from 'react';

const SignUpPage: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignUp routing={'path'}  path={'/sign-up'} signInUrl={'/sign-in'}/>
    </div>
  );
};

export default SignUpPage;
