"use client";
import Sidebar from "@/components/navi/Sidebar";
import Notebook from "@/components/ui/Card/Notebook";
import CardNote from "@/components/ui/Card/CardNote";
import DraftArea from "@/components/ui/Notepage/DraftArea";
import CardEditArea from "@/components/ui/Notepage/CardEditArea";
export default async function () {
    return (
        <>
            <style jsx>{`
                .page-bottom {
                    background-color: #cbd5e1; /* Slate-400 */
                    height: 33.33%;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                }
            `}</style>
            <div className="page-bottom"></div>
            <div className="flex w-full">
                <div>
                    <nav className="flex justify-start h-screen z-10">
                        <Sidebar />
                    </nav>
                </div>
                <div>
                    <main>
                        <div>
                            <CardEditArea />
                        </div>
                        <div className="ml-10 mt-10 flex gap-10">
                            <CardNote />
                            <CardNote />
                            <CardNote />
                            <CardNote />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}