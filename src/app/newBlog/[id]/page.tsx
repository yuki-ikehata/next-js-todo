import { DeleteButton } from '@/components/article/deleteButton.tsx';
// import { getDetailArticle } from '@/hooks/newBlogAPI';
import Image from 'next/image'
import React from 'react'
import { supabase } from "@/utils/supabaseClient";

export default async function Article({ params }: { params: { id: string } }) {
    // const detailArticle = await getDetailArticle(params.id);

    try {
        // Supabaseから特定の記事を取得
        const { data: articles, error } = await supabase
            .from('posts')
            .select('*')
            .eq('id', params.id)
            .single();

        // エラーハンドリング
        if (error) {
            console.error("Supabaseエラー:", error);
            return <div>記事の読み込み中にエラーが発生しました</div>;
        }

        // 記事が存在しない場合
        if (!articles) {
            return <div>記事が見つかりませんでした</div>;
        }

    return (
        <div className='max-w-full max-auto p-5'>
            <Image src={`https://picsum.photos/800/600?sig=${articles.id}`} alt="記事の画像" width={300} height={200} />
            <h2 className='text-4xl font-bold text-center my-10'>{articles.title}</h2>
            <div className='text-lg leading-relaxed text-justify'>
                <p>{articles.content}</p>
            </div>
            <div className='text-right mt-3'>
                <DeleteButton id={articles.id} />
            </div>
        </div>
    )

    } catch (error) {
        // 予期せぬエラーのハンドリング
        console.error("システムエラー:", error);
        return <div>予期せぬエラーが発生しました</div>;
    }
}
