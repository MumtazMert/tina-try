import { Template } from "tinacms";

export const videoBlock: Template = {
    name: 'videoBlock',
    label: 'Video',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Video Title',
            description: 'Optional title for the video',
        },
        {
            type: 'string',
            name: 'type',
            label: 'Video Type',
            description: 'The type of video to embed',
            options: [
                { value: 'youtube', label: 'YouTube' },
                { value: 'vimeo', label: 'Vimeo' },
                { value: 'dailymotion', label: 'Dailymotion' },
                { value: 'custom', label: 'Custom Embed' },
                { value: 'file', label: 'Video File' }
            ],
            required: true,
        },
        {
            type: 'string',
            name: 'url',
            label: 'Video URL',
            description: 'URL of the video (for YouTube, Vimeo, etc.)',
        },
        {
            type: 'string',
            name: 'videoId',
            label: 'Video ID',
            description: 'Video ID (for YouTube, Vimeo, etc.)',
        },
        {
            type: 'image',
            name: 'thumbnail',
            label: 'Custom Thumbnail',
            description: 'Custom thumbnail image for the video',
        },
        {
            type: 'string',
            name: 'embedCode',
            label: 'Embed Code',
            description: 'Custom embed code (for custom videos)',
            ui: {
                component: 'textarea',
            },
        },
        {
            type: 'number',
            name: 'width',
            label: 'Width',
            description: 'Width of the video in pixels',
            ui: {
                component: 'number',
            }
        },
        {
            type: 'number',
            name: 'height',
            label: 'Height',
            description: 'Height of the video in pixels',
            ui: {
                component: 'number',
            }
        },
        {
            type: 'boolean',
            name: 'autoplay',
            label: 'Autoplay',
            description: 'Start playing automatically',
        },
        {
            type: 'boolean',
            name: 'muted',
            label: 'Muted',
            description: 'Start muted',
        },
        {
            type: 'boolean',
            name: 'controls',
            label: 'Show Controls',
            description: 'Display video controls',
        },
        {
            type: 'boolean',
            name: 'loop',
            label: 'Loop',
            description: 'Loop the video',
        },
        {
            type: 'string',
            name: 'caption',
            label: 'Caption',
            description: 'Optional caption for the video',
        }
    ]
}
