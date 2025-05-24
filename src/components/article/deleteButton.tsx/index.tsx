"use client";
import { deleteArticle } from "@/hooks/newBlogAPI";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
    id: string;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
    const router = useRouter();
    const handleDelete = async () => {
        await deleteArticle(id);
        router.push("/newBlog");
        router.refresh();
    }

    return (
        <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={handleDelete}
        >
            削除
        </button>
    )
}