"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import BlogList from "./components/BlogList";

import type { PostConnectionQuery } from "../tina/__generated__/types";

interface HomePageProps {
    data: PostConnectionQuery;
    query: string;
    variables: Record<string, unknown>;
}

export default function HomePage(props: HomePageProps) {
    // Always call useTina to avoid conditional hook calls
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    console.log("useTina data:", data);

    if (!data?.postConnection?.edges) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">No posts found</h1>
                    <p className="text-gray-400">No blog posts are available.</p>
                </div>
            </div>
        );
    }

    const posts = data.postConnection.edges
        ?.filter((edge) => edge?.node)
        .map((edge) => edge!.node!)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) || [];

    return <BlogList posts={posts} />;
}
