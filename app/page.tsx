"use client";
import { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import { client } from "../tina/__generated__/client";

interface BlogPost {
  title: string;
  date: string;
  excerpt?: string | null;
  tags?: (string | null)[] | null;
  _sys: {
    filename: string;
  };
}

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const result = await client.queries.postConnection();

        if (result.data?.postConnection?.edges) {
          const fetchedPosts = result.data.postConnection.edges
            .filter((edge) => edge?.node)
            .map((edge) => edge!.node!)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

          setPosts(fetchedPosts);
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-300">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error loading posts</h1>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return <BlogList posts={posts} />;
}