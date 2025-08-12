import { useState } from 'react';

interface CodeBlockProps {
    title?: string;
    language: string;
    code: string;
    filename?: string;
    showLineNumbers?: boolean;
    copyButton?: boolean;
}

export default function CodeBlock({
    title,
    language,
    code,
    filename,
    showLineNumbers = false,
    copyButton = true
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className="my-8">
            {(title || filename) && (
                <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                        {filename && (
                            <span className="text-sm text-gray-400 font-mono">{filename}</span>
                        )}
                        {title && (
                            <span className="text-sm text-gray-300">{title}</span>
                        )}
                    </div>
                    {language && (
                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                            {language}
                        </span>
                    )}
                </div>
            )}

            <div className="relative">
                <pre className={`bg-gray-900 p-4 rounded-lg overflow-x-auto ${!title && !filename ? 'rounded-t-lg' : 'rounded-t-none'
                    }`}>
                    <code className={`language-${language} text-gray-100`}>
                        {code}
                    </code>
                </pre>

                {copyButton && (
                    <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                )}
            </div>
        </div>
    );
}
