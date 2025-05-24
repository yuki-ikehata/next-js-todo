import { DeleteButton } from '@/components/article/deleteButton.tsx';
import { getDetailArticle } from '@/hooks/newBlogAPI';
import Image from 'next/image'
import React from 'react'

export default async function Article({ params }: { params: { id: string } }) {
    const detailArticle = await getDetailArticle(params.id);

    return (
        <div className='max-w-full max-auto p-5'>
            <Image src={`https://picsum.photos/800/600?sig=${detailArticle.id}`} alt="記事の画像" width={300} height={200} />
            <h2 className='text-4xl font-bold text-center my-10'>{detailArticle.title}</h2>
            <div className='text-lg leading-relaxed text-justify'>
                <p>{detailArticle.content}</p>
            </div>
            <div className='text-right mt-3'>
                <DeleteButton id={detailArticle.id} />
            </div>
        </div>
    )
}
