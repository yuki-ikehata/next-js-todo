import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-5 px-10 border-b border-gray-300">
            <div>
                <h1 className="text-4xl font-extrabold">
                    <Link href="/">Next.js</Link>
                </h1>
            </div>
            <div>
                <nav className="text-sm font-medium">
                    <Link href="/newBlog/new/" className="bg-orange-500 px-3 py-3 rounded-md">記事を書く</Link>
                </nav>
            </div>
        </header>
    )
}