import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from 'react';
import { PiSignIn, PiSignOut } from 'react-icons/pi';

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="btn btn-ghost glass mx-4 w-30">
          <PiSignOut size={25} className="mr-2" />
          Log Out
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="btn btn-ghost glass mx-4 w-30"
    >
      <PiSignIn size={25} className="mr-2" />
      Log In
    </Link>
  );
}
