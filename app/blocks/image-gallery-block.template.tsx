import { Template } from "tinacms";

export const imageGalleryBlock: Template = {
    name: 'imageGalleryBlock',
    label: 'Image Gallery',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Gallery Title',
            description: 'Optional title for the image gallery',
        },
        {
            type: 'object',
            name: 'images',
            label: 'Images',
            list: true,
            fields: [
                {
                    type: 'image',
                    name: 'image',
                    label: 'Image',
                    required: true,
                },
                {
                    type: 'string',
                    name: 'alt',
                    label: 'Alt Text',
                    description: 'Alternative text for accessibility',
                    required: true,
                },
                {
                    type: 'string',
                    name: 'caption',
                    label: 'Caption',
                    description: 'Optional caption for the image',
                },
                {
                    type: 'string',
                    name: 'link',
                    label: 'Link',
                    description: 'Optional link when image is clicked',
                }
            ]
        },
        {
            type: 'string',
            name: 'layout',
            label: 'Layout',
            description: 'How to display the images',
            options: [
                { value: 'grid', label: 'Grid' },
                { value: 'carousel', label: 'Carousel' },
                { value: 'masonry', label: 'Masonry' },
                { value: 'list', label: 'List' }
            ],
            required: true,
        },
        {
            type: 'number',
            name: 'columns',
            label: 'Columns',
            description: 'Number of columns for grid layout',
            ui: {
                component: 'number',
            }
        },
        {
            type: 'boolean',
            name: 'lightbox',
            label: 'Enable Lightbox',
            description: 'Allow clicking images to view in lightbox',
        },
        {
            type: 'boolean',
            name: 'showCaptions',
            label: 'Show Captions',
            description: 'Display image captions',
        }
    ]
}
