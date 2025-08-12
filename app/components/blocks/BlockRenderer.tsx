import CodeBlock from './CodeBlock';
import CalloutBlock from './CalloutBlock';
import QuoteBlock from './QuoteBlock';

interface BlockRendererProps {
    blocks: Array<{
        __typename: string;
        [key: string]: unknown;
    }>;
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
    if (!blocks || blocks.length === 0) {
        return null;
    }

    return (
        <div className="space-y-8">
            {blocks.map((block, index) => {
                switch (block.__typename) {
                    case 'CodeBlock':
                        return (
                            <CodeBlock
                                key={index}
                                title={block.title as string}
                                language={block.language as string}
                                code={block.code as string}
                                filename={block.filename as string}
                                showLineNumbers={block.showLineNumbers as boolean}
                                copyButton={block.copyButton as boolean}
                            />
                        );

                    case 'CalloutBlock':
                        return (
                            <CalloutBlock
                                key={index}
                                type={block.type as 'info' | 'warning' | 'error' | 'success' | 'tip' | 'note' | 'important' | 'question' | 'example' | 'quote'}
                                title={block.title as string}
                                content={block.content as string}
                                collapsible={block.collapsible as boolean}
                                icon={block.icon as string}
                            />
                        );

                    case 'QuoteBlock':
                        return (
                            <QuoteBlock
                                key={index}
                                quote={block.quote as string}
                                author={block.author as string}
                                source={block.source as string}
                                url={block.url as string}
                                authorImage={block.authorImage as string}
                                style={block.style as 'default' | 'large' | 'pullquote' | 'testimonial' | 'minimal'}
                                alignment={block.alignment as 'left' | 'center' | 'right'}
                                showQuotes={block.showQuotes as boolean}
                                backgroundColor={block.backgroundColor as 'none' | 'light' | 'dark' | 'accent'}
                            />
                        );

                    // Add more block types here as you create them
                    case 'ImageGalleryBlock':
                        return (
                            <div key={index} className="my-8 p-4 bg-gray-800 rounded-lg">
                                <p className="text-gray-400">Image Gallery Block - Coming Soon</p>
                            </div>
                        );

                    case 'TableBlock':
                        return (
                            <div key={index} className="my-8 p-4 bg-gray-800 rounded-lg">
                                <p className="text-gray-400">Table Block - Coming Soon</p>
                            </div>
                        );

                    case 'VideoBlock':
                        return (
                            <div key={index} className="my-8 p-4 bg-gray-800 rounded-lg">
                                <p className="text-gray-400">Video Block - Coming Soon</p>
                            </div>
                        );

                    default:
                        return (
                            <div key={index} className="my-8 p-4 bg-gray-800 rounded-lg">
                                <p className="text-gray-400">
                                    Unknown block type: {block.__typename}
                                </p>
                            </div>
                        );
                }
            })}
        </div>
    );
}
