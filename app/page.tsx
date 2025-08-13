import { client } from "../tina/__generated__/client";
import HomePage from "./HomePage";

export default async function Page() {
  try {
    const result = await client.queries.postConnection();

    if (!result.data?.postConnection?.edges) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">No posts found</h1>
            <p className="text-gray-400">No blog posts are available.</p>
          </div>
        </div>
      );
    }



    return (
      <HomePage
        data={result.data}
        query={result.query}
        variables={result.variables}
      />
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error loading posts</h1>
          <p className="text-gray-400">Failed to load blog posts.</p>
        </div>
      </div>
    );
  }
}