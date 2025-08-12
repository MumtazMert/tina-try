import { Template } from "tinacms";

export const calloutBlock: Template = {
    name: 'calloutBlock',
    label: 'Callout Block',
    fields: [
        {
            type: 'string',
            name: 'type',
            label: 'Callout Type',
            description: 'The type of callout to display',
            options: [
                { value: 'info', label: 'Info' },
                { value: 'warning', label: 'Warning' },
                { value: 'error', label: 'Error' },
                { value: 'success', label: 'Success' },
                { value: 'tip', label: 'Tip' },
                { value: 'note', label: 'Note' },
                { value: 'important', label: 'Important' },
                { value: 'question', label: 'Question' },
                { value: 'example', label: 'Example' },
                { value: 'quote', label: 'Quote' }
            ],
            required: true,
        },
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            description: 'Optional title for the callout',
        },
        {
            type: 'rich-text',
            name: 'content',
            label: 'Content',
            description: 'The main content of the callout',
            required: true,
        },
        {
            type: 'boolean',
            name: 'collapsible',
            label: 'Collapsible',
            description: 'Make the callout collapsible',
        },
        {
            type: 'string',
            name: 'icon',
            label: 'Custom Icon',
            description: 'Optional custom icon (emoji or icon name)',
        }
    ]
}
