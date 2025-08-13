"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import BlogPost from "../../components/BlogPost";
import Link from "next/link";
import type { PostQuery } from "../../../tina/__generated__/types";

interface BlogPostPageProps {
    data: PostQuery;
    query: string;
    variables: {
        relativePath: string;
    };
}

export default function BlogPostPage(props: BlogPostPageProps) {
    // Pass our data through the "useTina" hook to make it editable
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    const post = data.post;

    if (!post) {
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
                blocks={post.blocks?.filter((block): block is NonNullable<typeof block> => block !== null).map((block) => ({
                    ...block,
                    __typename: block.__typename || 'UnknownBlock'
                })) || undefined}
            />
        </div>
    );
}
