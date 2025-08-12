import { useState } from 'react';

interface CalloutBlockProps {
    type: 'info' | 'warning' | 'error' | 'success' | 'tip' | 'note' | 'important' | 'question' | 'example' | 'quote';
    title?: string;
    content: string;
    collapsible?: boolean;
    icon?: string;
}

const calloutStyles = {
    info: {
        bg: 'bg-blue-900/20',
        border: 'border-blue-500/30',
        icon: '💡',
        title: 'Info'
    },
    warning: {
        bg: 'bg-yellow-900/20',
        border: 'border-yellow-500/30',
        icon: '⚠️',
        title: 'Warning'
    },
    error: {
        bg: 'bg-red-900/20',
        border: 'border-red-500/30',
        icon: '❌',
        title: 'Error'
    },
    success: {
        bg: 'bg-green-900/20',
        border: 'border-green-500/30',
        icon: '✅',
        title: 'Success'
    },
    tip: {
        bg: 'bg-purple-900/20',
        border: 'border-purple-500/30',
        icon: '💡',
        title: 'Tip'
    },
    note: {
        bg: 'bg-gray-900/20',
        border: 'border-gray-500/30',
        icon: '📝',
        title: 'Note'
    },
    important: {
        bg: 'bg-orange-900/20',
        border: 'border-orange-500/30',
        icon: '🔥',
        title: 'Important'
    },
    question: {
        bg: 'bg-indigo-900/20',
        border: 'border-indigo-500/30',
        icon: '❓',
        title: 'Question'
    },
    example: {
        bg: 'bg-teal-900/20',
        border: 'border-teal-500/30',
        icon: '📖',
        title: 'Example'
    },
    quote: {
        bg: 'bg-gray-900/20',
        border: 'border-gray-500/30',
        icon: '💬',
        title: 'Quote'
    }
};

export default function CalloutBlock({
    type,
    title,
    content,
    collapsible = false,
    icon
}: CalloutBlockProps) {
    const [isExpanded, setIsExpanded] = useState(!collapsible);
    const style = calloutStyles[type];
    const displayIcon = icon || style.icon;
    const displayTitle = title || style.title;

    return (
        <div className={`my-6 p-4 rounded-lg border ${style.bg} ${style.border}`}>
            <div className="flex items-start space-x-3">
                <span className="text-lg flex-shrink-0">{displayIcon}</span>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-white mb-2">
                            {displayTitle}
                        </h4>

                        {collapsible && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {isExpanded ? '−' : '+'}
                            </button>
                        )}
                    </div>

                    {isExpanded && (
                        <div
                            className="text-gray-300 prose prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
