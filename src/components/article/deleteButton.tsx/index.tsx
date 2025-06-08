"use client";
// import { deleteArticle } from "@/hooks/newBlogAPI";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";
import { useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";

interface DeleteButtonProps {
    id: string;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string>("");

    const handleDelete = async () => {
        // await deleteArticle(id);
        
        setIsDeleting(true);
        setError("");

        try {
            const { error: deleteError } = await supabase
                .from("posts")
                .delete()
                .eq("id", id);

            if (deleteError) {
                throw deleteError;
            }

            // 削除成功時の処理
            router.push("/newBlog");
            router.refresh();
        } catch (err) {
            // console.error("削除中にエラーが発生しました:", err);
            if (err instanceof PostgrestError) {
                setError(`データベースエラー: ${err.message}`);
            } else {
                setError("記事の削除中にエラーが発生しました。");
            }
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <div>
            {error && (
                <div className="text-red-500 mb-2">
                    {error}
                </div>
            )}
            <button
                className={`px-4 py-2 rounded-md ${
                    isDeleting
                        ? "bg-red-300 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                } text-white`}
                onClick={handleDelete}
                disabled={isDeleting}
            >
                {isDeleting ? "削除中..." : "削除"}
            </button>
        </div>
    )
}