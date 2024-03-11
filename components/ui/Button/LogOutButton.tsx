import React from 'react';
import Link from "next/link";
import { PiSignOut } from 'react-icons/pi';


const SignUpButton = () => {
    return (
        <Link href="/signup" className="btn btn-ghost glass my-4 w-30">
            <PiSignOut size={25} className="mr-2" />
            Log Out
        </Link>

    );
};

export default SignUpButton;
