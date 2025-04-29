import type { Metadata } from "next";
import { getPostsData } from "../../../lib/post";
import utilStyles from "../../styles/utils.module.css";
import { notFound } from "next/navigation";
export const metadata: Metadata = {
    title: "Blog",
};

//SSGの場合（App Routerのバージョンの場合でも必要）
export async function generateStaticParams() {
    const params = await getPostsData();
    return params.map((param) => ({ id: param.id }));
}

type Params = {
    params: { id: string }
};

export default async function LayerPost({ params }: Params) {
    const { id } = await params;
    const allPostsData = await getPostsData();
    const postData = allPostsData.find((p) => p.id === id);

    if (!postData) {
        notFound();
    }

    return (
        <article>
            <h2 className={utilStyles.headingXl}>{postData.title}</h2>
            <p className={utilStyles.lightText}>{postData.date}</p>
            <div className={utilStyles.contentText} dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
    )
}