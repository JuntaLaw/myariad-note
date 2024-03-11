import AuthButton from "@/components/ui/Button/AuthButton";
import Sidebar from "@/components/navi/Sidebar";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/lp/LpTop";
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

                    {/* <AuthButton /> */}


                </nav>
            </div>

            <div className="">

                <main className="">

                </main>
            </div>


        </div>
    );
}
