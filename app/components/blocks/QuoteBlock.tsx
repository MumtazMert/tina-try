interface QuoteBlockProps {
    quote: string;
    author?: string;
    source?: string;
    url?: string;
    authorImage?: string;
    style?: 'default' | 'large' | 'pullquote' | 'testimonial' | 'minimal';
    alignment?: 'left' | 'center' | 'right';
    showQuotes?: boolean;
    backgroundColor?: 'none' | 'light' | 'dark' | 'accent';
}

const quoteStyles = {
    default: 'text-lg',
    large: 'text-2xl',
    pullquote: 'text-xl italic',
    testimonial: 'text-lg',
    minimal: 'text-base'
};

const bgStyles = {
    none: '',
    light: 'bg-gray-800/50',
    dark: 'bg-gray-900/50',
    accent: 'bg-blue-900/20'
};

const alignmentStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
};

export default function QuoteBlock({
    quote,
    author,
    source,
    url,
    authorImage,
    style = 'default',
    alignment = 'left',
    showQuotes = true,
    backgroundColor = 'none'
}: QuoteBlockProps) {
    const textStyle = quoteStyles[style];
    const bgStyle = bgStyles[backgroundColor];
    const alignStyle = alignmentStyles[alignment];

    return (
        <blockquote className={`my-8 p-6 rounded-lg ${bgStyle} ${alignStyle}`}>
            <div className={`${textStyle} text-gray-200 leading-relaxed`}>
                {showQuotes && (
                    <span className="text-4xl text-gray-500 mr-2">"</span>
                )}
                <span dangerouslySetInnerHTML={{ __html: quote }} />
                {showQuotes && (
                    <span className="text-4xl text-gray-500 ml-2">"</span>
                )}
            </div>

            {(author || source) && (
                <footer className="mt-4 flex items-center space-x-3">
                    {authorImage && (
                        <img
                            src={authorImage}
                            alt={author || 'Author'}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    )}

                    <div>
                        {author && (
                            <cite className="text-white font-semibold not-italic">
                                {author}
                            </cite>
                        )}

                        {source && (
                            <div className="text-gray-400 text-sm">
                                {url ? (
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        {source}
                                    </a>
                                ) : (
                                    source
                                )}
                            </div>
                        )}
                    </div>
                </footer>
            )}
        </blockquote>
    );
}
