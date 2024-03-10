import React from 'react';
import Link from "next/link";
import { PiPawPrint } from 'react-icons/pi';


const SignUpButton = () => {
  return (
    <Link href="/signup" className="btn btn-ghost glass my-4 w-30">
      <PiPawPrint size={25} className="mr-2" />
      Sign Up
    </Link>

  );
};

export default SignUpButton;


