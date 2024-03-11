import AuthButton from "@/components/ui/Button/AuthButton";
import Sidebar from "@/components/navi/Sidebar";
import Notebook from "@/components/ui/Card/Notebook";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    return (
        <div className="flex w-full">
            <div>
                <nav className="flex justify-start h-screen">
                    <Sidebar />
                </nav>
            </div>

            <div>

                <main className="ml-10 mt-10 flex gap-10">
                    <Notebook />
                    <Notebook />
                </main>
            </div>


        </div>
    );
}
