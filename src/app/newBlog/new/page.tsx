"use client";

import { createArticle } from "@/hooks/newBlogAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNewBlog() {
    const router = useRouter();
    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        await createArticle(id, title, content);
        setIsLoading(false);

        router.push("/newBlog");
        router.refresh();
    }
    return (
        <div className="min-h-screen py-8 px-4 md:px-12">
            <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
            <form className="bg-slate-200 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
                    <input type="text"
                        className="w-full shadow py-2 px-3 text-gray-700 leading-tight border border-gray-300 bg-slate-50 rounded focus:outline-none"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">タイトル</label>
                    <input type="text"
                        className="w-full shadow py-2 px-3 text-gray-700 leading-tight border border-gray-300 bg-slate-50 rounded focus:outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
                    <textarea className="w-full shadow py-2 px-3 text-gray-700 leading-tight border border-gray-300 bg-slate-50 rounded focus:outline-none"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit"
                    disabled={isLoading}
                    className={`py-2 px-4 border rounded-md ${isLoading
                        ? "bg-orange-300 cursor-not-allowed"
                        : "bg-orange-400 hover:bg-orange-500"}`}>投稿</button>
            </form>
        </div>
    )
}