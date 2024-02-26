/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ggh2kz08R1r
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
    return (
        <div className="flex h-screen">
            <nav className="w-16 flex flex-col items-center bg-gray-100 py-4">
                <MenuIcon className="mb-10 h-6 w-6" />
                <FlagIcon className="mb-10 h-8 w-8" />
                <SearchIcon className="mb-10 h-6 w-6" />
                <BellIcon className="mb-auto h-6 w-6" />
                <SettingsIcon className="h-6 w-6" />
                <FileQuestionIcon className="mt-10 h-6 w-6" />
            </nav>
            <div className="flex-grow overflow-y-auto">
                <header className="flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold">Notebooks</h1>
                    <Button className="bg-blue-500 text-white">+</Button>
                </header>
                <main className="px-4 py-2 grid grid-cols-3 gap-4">
                    <Card className="w-full">
                        <img
                            alt="My Notebook"
                            className="rounded-t-md"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">My Notebook</h2>
                        </div>
                    </Card>
                    <Card className="w-full">
                        <img
                            alt="Artwork"
                            className="rounded-t-md"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Artwork</h2>
                        </div>
                    </Card>
                    <Card className="w-full">
                        <img
                            alt="Travel"
                            className="rounded-t-md"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Travel</h2>
                        </div>
                    </Card>
                    <Card className="w-full">
                        <img
                            alt="Recipes"
                            className="rounded-t-md"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Recipes</h2>
                        </div>
                    </Card>
                    <Card className="w-full">
                        <img
                            alt="Ideas"
                            className="rounded-t-md"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Ideas</h2>
                        </div>
                    </Card>
                    <Card className="w-full">
                        <img
                            alt="Quotes"
                            className="rounded-t-md"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Quotes</h2>
                        </div>
                    </Card>
                    <Card className="w-full">
                        <img
                            alt="Vintage"
                            className="rounded-t-md"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Vintage</h2>
                        </div>
                    </Card>
                    <Card className="w-full">
                        <img
                            alt="Research"
                            className="rounded-t-md"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Research</h2>
                        </div>
                    </Card>
                    <Card className="w-full">
                        <img
                            alt="Architecture"
                            className="rounded-t-md"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">Architecture</h2>
                        </div>
                    </Card>
                </main>
            </div>
            <aside className="w-16 bg-gray-100">
                <div className="flex flex-col items-center py-4">
                    <BookIcon className="mb-10 h-6 w-6" />
                    <StickyNoteIcon className="mb-10 h-6 w-6" />
                    <StarIcon className="h-6 w-6" />
                </div>
            </aside>
        </div>
    )
}

function BellIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function BookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    )
}


function FileQuestionIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
            <path d="M12 17h.01" />
        </svg>
    )
}


function FlagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}


function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}


function StickyNoteIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
            <path d="M15 3v6h6" />
        </svg>
    )
}
