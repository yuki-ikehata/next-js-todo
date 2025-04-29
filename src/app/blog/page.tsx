import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import blogStyles from "./blog.module.css";
import { getPostsData } from "../../lib/post";
export const metadata: Metadata = {
    title: "Blog",
};

//SSGの場合（App Routerのバージョンの場合、必要ない）
// export async function getStaticProps() {
//     const allPostsData = getPostsData();
//     console.log(allPostsData);
//     return {
//         props: {
//             allPostsData
//         }
//     }
// }

export default async function Blog() {
    const allPostsData = await getPostsData();
    // console.log(allPostsData);

    return (
        <>
            <section className={utilStyles.headingMd}>
                <p>テキストテキストテキスト</p>
            </section>

            <section className={blogStyles.container}>
                <h2 className={utilStyles.titleH2}>📝記事一覧</h2>
                <ul className={blogStyles.grid}>
                    {allPostsData.map(({ id, title, date, thumbnail }) => (
                        <li key={id}>
                            <article>
                                <Link href={`/blog/${id}`}>
                                    <Image src={thumbnail} className={blogStyles.thumbnailImage} alt="サムネイル画像" width={500} height={300} />
                                    <p className={utilStyles.boldText}>{title}</p>
                                </Link>
                                <small className={utilStyles.lightText}>{date}</small>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}