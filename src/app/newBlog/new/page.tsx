"use client";

// import { createArticle } from "@/hooks/newBlogAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";

export default function CreateNewBlog() {
    const router = useRouter();
    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const validateForm = () => {
        if (!id.trim()) {
            setErrorMessage("URLを入力してください");
            return false;
        }
        if (!title.trim()) {
            setErrorMessage("タイトルを入力してください");
            return false;
        }
        if (!content.trim()) {
            setErrorMessage("本文を入力してください");
            return false;
        }
        return true;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage("");

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        // await createArticle(id, title, content);

        try {
            // Supabaseにデータを挿入
            const { error: supabaseError } = await supabase
                .from("posts")
                .insert([
                    {
                        id,
                        title,
                        content,
                        createdAt: new Date().toISOString()
                    }
                ])
                .select();

            if (supabaseError) {
                throw supabaseError;
            }

            // 成功時の処理
            router.push("/newBlog");
            router.refresh();
        } catch (err) {
            if (err instanceof PostgrestError) {
                setErrorMessage(`データベースエラー: ${err.message}`);
            } else {
                setErrorMessage("記事の作成中にエラーが発生しました。");
            }
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="min-h-screen py-8 px-4 md:px-12">
            <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
            {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {errorMessage}
                </div>
            )}
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