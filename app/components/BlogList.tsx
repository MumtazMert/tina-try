import Link from 'next/link';
import { format } from 'date-fns';

interface BlogPost {
    title: string;
    date: string;
    excerpt?: string | null;
    tags?: (string | null)[] | null;
    _sys: {
        filename: string;
    };
}

interface BlogListProps {
    posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <header className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Overreacted
                </h1>
                <p className="text-lg text-gray-300">
                    Personal blog by Dan Abramov. I explain with words and code.
                </p>
            </header>

            <div className="space-y-12">
                {posts.map((post) => (
                    <article key={post._sys.filename} className="border-b border-gray-700 pb-8">
                        <Link href={`/posts/${post._sys.filename}`} className="block group">
                            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h2>
                        </Link>

                        <div className="flex items-center text-gray-400 mb-3">
                            <time dateTime={post.date} className="text-sm">
                                {format(new Date(post.date), 'MMMM d, yyyy')}
                            </time>
                            {post.tags && post.tags.length > 0 && (
                                <div className="ml-4 flex gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {post.excerpt && (
                            <p className="text-gray-300 leading-relaxed">
                                {post.excerpt}
                            </p>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
}
