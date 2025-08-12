import { Template } from "tinacms";

export const quoteBlock: Template = {
    name: 'quoteBlock',
    label: 'Quote',
    fields: [
        {
            type: 'rich-text',
            name: 'quote',
            label: 'Quote Text',
            description: 'The main quote content',
            required: true,
        },
        {
            type: 'string',
            name: 'author',
            label: 'Author',
            description: 'Who said the quote',
        },
        {
            type: 'string',
            name: 'source',
            label: 'Source',
            description: 'Where the quote is from (book, article, etc.)',
        },
        {
            type: 'string',
            name: 'url',
            label: 'Source URL',
            description: 'Link to the source',
        },
        {
            type: 'image',
            name: 'authorImage',
            label: 'Author Image',
            description: 'Profile picture of the author',
        },
        {
            type: 'string',
            name: 'style',
            label: 'Quote Style',
            description: 'Visual style of the quote',
            options: [
                { value: 'default', label: 'Default' },
                { value: 'large', label: 'Large' },
                { value: 'pullquote', label: 'Pull Quote' },
                { value: 'testimonial', label: 'Testimonial' },
                { value: 'minimal', label: 'Minimal' }
            ]
        },
        {
            type: 'string',
            name: 'alignment',
            label: 'Alignment',
            description: 'Text alignment',
            options: [
                { value: 'left', label: 'Left' },
                { value: 'center', label: 'Center' },
                { value: 'right', label: 'Right' }
            ]
        },
        {
            type: 'boolean',
            name: 'showQuotes',
            label: 'Show Quote Marks',
            description: 'Display quotation marks around the quote',
        },
        {
            type: 'string',
            name: 'backgroundColor',
            label: 'Background Color',
            description: 'Background color for the quote block',
            options: [
                { value: 'none', label: 'None' },
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'accent', label: 'Accent' }
            ]
        }
    ]
}
