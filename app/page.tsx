import AuthButton from "../components/ui/button/AuthButton";
import { createClient } from "@/utils/supabase/server";
import LpTop from "@/components/lp/LpTop";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full mx-10 flex justify-end items-center p-3 text-sm gap-5">
          {isSupabaseConnected && <AuthButton />}
          <button className="btn btn-secondary">Sign Up</button>
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <LpTop />
        <main className="flex-1 flex flex-col gap-6">

        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">

      </footer>
    </div>
  );
}
