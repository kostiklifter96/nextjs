import { Metadata } from "next";

type Props = {
    params: {
        id: string;
    };
};

async function getDataId(id: string) {
    const responce = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: {
                revalidate: 60,
            },
        },
    );

    return responce.json();
}

export async function generateMetadata({
    params: { id },
}: Props): Promise<Metadata> {
    const postId = await getDataId(id);

    return { title: postId.title };
}

export default async function Post({ params: { id } }: Props) {
    const postId = await getDataId(id);
    console.log(postId);

    return (
        <>
            <h1>{postId.title}</h1>
            <p>{postId.body}</p>
        </>
    );
}
