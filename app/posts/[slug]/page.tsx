import { client } from "../../../tina/__generated__/client";
import BlogPostPage from "./BlogPostPage";
import Link from "next/link";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;

    try {
        const result = await client.queries.post({
            relativePath: `${slug}.md`,
        });

        if (!result.data?.post) {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
                        <Link href="/" className="text-blue-400 hover:underline">
                            ← Back to home
                        </Link>
                    </div>
                </div>
            );
        }

        return (
            <BlogPostPage
                data={result.data}
                query={result.query}
                variables={result.variables}
            />
        );
    } catch (error) {
        console.error("Error fetching post:", error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Failed to load post</h1>
                    <Link href="/" className="text-blue-400 hover:underline">
                        ← Back to home
                    </Link>
                </div>
            </div>
        );
    }
}
