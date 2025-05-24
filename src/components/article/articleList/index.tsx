import { Article } from "@/types/newBlogTypes";
import { ArticleCard } from "../articleCard";

interface ArticleListProps {
    articles: Article[];
}

export const ArticleList = ({ articles }: ArticleListProps) => {
    return (
        <div>
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    )
}