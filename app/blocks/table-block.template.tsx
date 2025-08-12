import { Template } from "tinacms";

export const tableBlock: Template = {
    name: 'tableBlock',
    label: 'Table',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Table Title',
            description: 'Optional title for the table',
        },
        {
            type: 'object',
            name: 'headers',
            label: 'Table Headers',
            list: true,
            fields: [
                {
                    type: 'string',
                    name: 'text',
                    label: 'Header Text',
                    required: true,
                },
                {
                    type: 'string',
                    name: 'align',
                    label: 'Alignment',
                    options: [
                        { value: 'left', label: 'Left' },
                        { value: 'center', label: 'Center' },
                        { value: 'right', label: 'Right' }
                    ]
                }
            ]
        },
        {
            type: 'object',
            name: 'rows',
            label: 'Table Rows',
            list: true,
            fields: [
                {
                    type: 'object',
                    name: 'cells',
                    label: 'Row Cells',
                    list: true,
                    fields: [
                        {
                            type: 'string',
                            name: 'content',
                            label: 'Cell Content',
                            required: true,
                        },
                        {
                            type: 'string',
                            name: 'align',
                            label: 'Alignment',
                            options: [
                                { value: 'left', label: 'Left' },
                                { value: 'center', label: 'Center' },
                                { value: 'right', label: 'Right' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: 'boolean',
            name: 'striped',
            label: 'Striped Rows',
            description: 'Add alternating row colors',
        },
        {
            type: 'boolean',
            name: 'bordered',
            label: 'Bordered',
            description: 'Add borders to the table',
        },
        {
            type: 'boolean',
            name: 'hoverable',
            label: 'Hoverable Rows',
            description: 'Highlight rows on hover',
        },
        {
            type: 'string',
            name: 'size',
            label: 'Table Size',
            options: [
                { value: 'small', label: 'Small' },
                { value: 'medium', label: 'Medium' },
                { value: 'large', label: 'Large' }
            ]
        },
        {
            type: 'boolean',
            name: 'sortable',
            label: 'Sortable',
            description: 'Make the table sortable',
        },
        {
            type: 'boolean',
            name: 'searchable',
            label: 'Searchable',
            description: 'Add search functionality to the table',
        }
    ]
}
