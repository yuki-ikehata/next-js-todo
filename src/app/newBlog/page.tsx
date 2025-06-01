import { ArticleList } from "@/components/article/articleList";
// import { getAllArticles } from "@/hooks/newBlogAPI";
import { supabase } from "@/utils/supabaseClient";

export default async function NewBlog() {
    // const articles = await getAllArticles();
    // console.log(articles);

    try {
        // 直接Supabaseを使用してデータを取得
        const { data: articles, error } = await supabase
            .from("posts")
            .select("*")

        // Supabaseのクエリエラー
        if (error) {
            console.error("Supabaseエラー:", error);
            return <div>記事の読み込み中にエラーが発生しました</div>;
        }

         // データ存在チェック
        if (!articles) {
            return <div>記事が見つかりませんでした</div>;
        }

    return (
        <div className="md:flex">
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                <ArticleList articles={articles} />
            </section>
            <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
                <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
                    <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
                    <h3 className="font-bold text-gray-900 mb-2">Category</h3>
                    <ul className="text-gray-600 mt-2">
                        <li>
                            <a href="#">Technology</a>
                        </li>
                        <li>
                            <a href="#">Automotive</a>
                        </li>
                        <li>
                            <a href="#">Finance</a>
                        </li>
                        <li>
                            <a href="#">Sports</a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
} catch (error) {
        // 予期せぬエラー（ネットワーク、ランタイムなど）
        console.error("システムエラー:", error);
        return <div>予期せぬエラーが発生しました</div>;
    }
}