import React from 'react';
import Link from "next/link";
import { PiTrash } from 'react-icons/pi';

const HomeButton = () => {
    return (
        <Link href="/" className="btn btn-ghost glass my-4 w-30">
            <div className='flex flex-row justify-start items-center'>
                <PiTrash size={25} className="mr-2" />
                <p>ごみ箱</p>
            </div>
        </Link>
    );
};

export default HomeButton;
