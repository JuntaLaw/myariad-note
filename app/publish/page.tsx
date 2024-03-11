"use client";
import Sidebar from "@/components/navi/Sidebar";
import Notebook from "@/components/ui/Card/Notebook";
import CardNote from "@/components/ui/Card/CardNote";
// import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";
import { useEffect, useState } from 'react';


export default async function () {


    return (
        <div className="flex w-full">
            <div>
                <nav className="flex justify-start h-screen">
                    <Sidebar />
                </nav>
            </div>

            <div>

                <main className="ml-10 mt-10 flex gap-10">
                    <CardNote />
                    <CardNote />
                    <CardNote />
                </main>
            </div>


        </div>
    );
}
