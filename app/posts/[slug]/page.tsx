"use client";
import { useState, useEffect } from "react";
import { use } from "react";
import BlogPost from "../../components/BlogPost";
import Link from "next/link";
import { client } from "../../../tina/__generated__/client";
import type { Post } from "../../../tina/__generated__/types";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = use(params);
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPost() {
            try {
                setLoading(true);
                const result = await client.queries.post({
                    relativePath: `${slug}.md`,
                });

                if (result.data?.post) {
                    setPost(result.data.post as Post);
                } else {
                    setError("Post not found");
                }
            } catch (err) {
                console.error("Error fetching post:", err);
                setError("Failed to load post");
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg text-gray-300">Loading...</div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">
                        {error || "Post not found"}
                    </h1>
                    <Link href="/" className="text-blue-400 hover:underline">
                        ← Back to home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <nav className="max-w-2xl mx-auto px-4 py-4">
                <Link href="/" className="text-blue-400 hover:underline">
                    ← Back to home
                </Link>
            </nav>
            <BlogPost
                title={post.title}
                date={post.date}
                excerpt={post.excerpt || undefined}
                tags={post.tags?.filter((tag): tag is string => tag !== null) || undefined}
                body={post.body}
                blocks={post.blocks?.filter((block): block is NonNullable<typeof block> => block !== null).map(block => ({
                    __typename: block.__typename || 'UnknownBlock',
                    ...block
                })) || undefined}
            />
        </div>
    );
}
