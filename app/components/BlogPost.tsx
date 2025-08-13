import React from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import BlockRenderer from './blocks/BlockRenderer';

interface BlogPostProps {
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
    body: string | Record<string, unknown>; // Tina returns JSON for rich text fields
    blocks?: Array<{
        __typename: string;
        [key: string]: unknown;
    }>;
}

// Types for rich text structure
interface RichTextNode {
    type: string;
    children?: RichTextNode[];
    text?: string;
    url?: string;
    alt?: string;
    caption?: string;
    [key: string]: unknown;
}

// Helper function to render rich text content
function renderRichText(content: string | RichTextNode | RichTextNode[]): React.ReactNode {
    if (typeof content === 'string') {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    if (Array.isArray(content)) {
        return (
            <div className="space-y-4">
                {content.map((item, index) => (
                    <div key={index}>
                        {renderRichTextItem(item)}
                    </div>
                ))}
            </div>
        );
    }

    if (content && typeof content === 'object') {
        return renderRichTextItem(content);
    }

    return null;
}

// Helper function to render individual rich text items
function renderRichTextItem(item: RichTextNode): React.ReactNode {
    if (!item || typeof item !== 'object') {
        return null;
    }

    const { type, children, text, url, alt } = item;

    switch (type) {
        case 'root':
            return (
                <div className="space-y-4">
                    {children?.map((child: RichTextNode, index: number) => (
                        <div key={index}>
                            {renderRichTextItem(child)}
                        </div>
                    ))}
                </div>
            );

        case 'h1':
            return (
                <h1 className="text-3xl font-bold text-white mt-8 mb-4">
                    {text}
                </h1>
            );

        case 'h2':
            return (
                <h2 className="text-2xl font-bold text-white mt-6 mb-3">
                    {text}
                </h2>
            );

        case 'h3':
            return (
                <h3 className="text-xl font-bold text-white mt-4 mb-2">
                    {text}
                </h3>
            );

        case 'h4':
            return (
                <h4 className="text-lg font-bold text-white mt-3 mb-2">
                    {text}
                </h4>
            );

        case 'h5':
            return (
                <h5 className="text-base font-bold text-white mt-2 mb-1">
                    {text}
                </h5>
            );

        case 'h6':
            return (
                <h6 className="text-sm font-bold text-white mt-2 mb-1">
                    {text}
                </h6>
            );

        case 'p':
            // Check if any children are images
            const hasImages = children?.some((child: RichTextNode) => child.type === 'img');

            if (hasImages) {
                // If there are images, render each child separately
                return (
                    <>
                        {children?.map((child: RichTextNode, index: number) => (
                            <React.Fragment key={index}>
                                {renderRichTextItem(child)}
                            </React.Fragment>
                        ))}
                    </>
                );
            } else {
                // Normal paragraph rendering
                return (
                    <p className="text-gray-300 leading-relaxed mb-4">
                        {children?.map((child: RichTextNode, index: number) => (
                            <span key={index}>
                                {renderRichTextItem(child)}
                            </span>
                        ))}
                    </p>
                );
            }

        case 'blockquote':
            return (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-4">
                    {children?.map((child: RichTextNode, index: number) => (
                        <div key={index}>
                            {renderRichTextItem(child)}
                        </div>
                    ))}
                </blockquote>
            );

        case 'ul':
            return (
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                    {children?.map((child: RichTextNode, index: number) => (
                        <li key={index}>
                            {renderRichTextItem(child)}
                        </li>
                    ))}
                </ul>
            );

        case 'ol':
            return (
                <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">
                    {children?.map((child: RichTextNode, index: number) => (
                        <li key={index}>
                            {renderRichTextItem(child)}
                        </li>
                    ))}
                </ol>
            );

        case 'li':
            return (
                <span>
                    {children?.map((child: RichTextNode, index: number) => (
                        <span key={index}>
                            {renderRichTextItem(child)}
                        </span>
                    ))}
                </span>
            );

        case 'a':
            return (
                <a
                    href={url}
                    className="text-blue-400 hover:text-blue-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
            );

        case 'strong':
            return (
                <strong className="font-bold text-white">
                    {text}
                </strong>
            );

        case 'em':
            return (
                <em className="italic text-gray-200">
                    {text}
                </em>
            );

        case 'code':
            return (
                <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded text-sm font-mono">
                    {text}
                </code>
            );

        case 'pre':
            return (
                <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
                    <code>{text}</code>
                </pre>
            );

        case 'img':
            return (
                <Image
                    src={url || ''}
                    alt={alt || ''}
                    width={800}
                    height={600}
                    className="max-w-full h-auto rounded-lg my-6"
                />
            );

        case 'hr':
            return <hr className="border-gray-700 my-8" />;

        case 'text':
            return <span className="text-gray-300">{text}</span>;

        default:
            // For unknown types, try to render children or text
            if (children) {
                return (
                    <div>
                        {children.map((child: RichTextNode, index: number) => (
                            <span key={index}>
                                {renderRichTextItem(child)}
                            </span>
                        ))}
                    </div>
                );
            }
            return text ? <span className="text-gray-300">{text}</span> : null;
    }
}

export default function BlogPost({ title, date, excerpt, tags, body, blocks }: BlogPostProps) {
    return (
        <article className="max-w-2xl mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                    {title}
                </h1>
                <div className="flex items-center text-gray-400 mb-4">
                    <time dateTime={date} className="text-sm">
                        {format(new Date(date), 'MMMM d, yyyy')}
                    </time>
                    {tags && tags.length > 0 && (
                        <div className="ml-4 flex gap-2">
                            {tags.map((tag) => (
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
                {excerpt && (
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {excerpt}
                    </p>
                )}
            </header>

            <div className="prose prose-lg max-w-none">
                {/* Render content blocks if they exist */}
                {blocks && blocks.length > 0 && (
                    <BlockRenderer blocks={blocks} />
                )}

                {/* Render rich text body */}
                {body && (
                    <div className="mt-8">
                        {renderRichText(body as string | RichTextNode | RichTextNode[])}
                    </div>
                )}
            </div>
        </article>
    );
}
