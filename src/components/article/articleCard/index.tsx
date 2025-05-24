import Image from "next/image"
import Link from "next/link"
import { Article } from "@/types/newBlogTypes";

interface ArticleCardProps {
    article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
    return (
        <article key={article.id} className="shadow-md my-4">
            <Link href={`/newBlog/${article.id}`} className="hover:opacity-75">
                <Image src={`https://picsum.photos/800/600?sig=${article.id}`} alt="記事の画像" width={300} height={200} />
            </Link>
            <div className="bg-white flex flex-col p-6">
                <Link href={`/newBlog/${article.id}`} className="text-blue-700 pb-4 font-bold">technology</Link>
                <Link href={`/newBlog/${article.id}`} className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">{article.title}</Link>
                <p className="text-slate-900 text-sm pb-3">{article.createdAt}</p>
                <Link href={`/newBlog/${article.id}`} className="text-slate-900 pb-6">{article.content.length > 100 ? article.content.slice(0, 100) + "..." : article.content}</Link>
                <Link href={`/newBlog/${article.id}`} className="text-pink-800 hover:text-pink-400">続きを読む</Link>
            </div>
        </article>
    )
}