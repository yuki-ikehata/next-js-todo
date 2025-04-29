import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
const postsDirectory = path.join(process.cwd(), "src", "posts");

type Post = {
    id: string;
    title: string;
    date: string;
    thumbnail: string;
    content: string;
};

//mdファイルデータを取り出す
export async function getPostsData(): Promise<Post[]> {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            const id = fileName.replace(/\.md$/, ''); //ファイル名から.mdを削除

            //マークダウンファイるを文字列として読み取る
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            //マークダウンファイルをオブジェクトに変換
            const matterResult = matter(fileContents);

            const blogContent = await remark().use(html).process(matterResult.content);
            const blogContentHtml = blogContent.toString();

            //idとデータを返す
            return {
                id,
                title: matterResult.data.title,
                date: matterResult.data.date,
                thumbnail: matterResult.data.thumbnail,
                content: blogContentHtml,
            };
        })
    )
    return allPostsData;
}
