import { Template } from "tinacms";

export const codeBlock: Template = {
    name: 'codeBlock',
    label: 'Code Block',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            description: 'Optional title for the code block',
        },
        {
            type: 'string',
            name: 'language',
            label: 'Language',
            description: 'Programming language for syntax highlighting',
            options: [
                'javascript',
                'typescript',
                'jsx',
                'tsx',
                'python',
                'bash',
                'json',
                'css',
                'html',
                'sql',
                'markdown',
                'yaml',
                'xml',
                'php',
                'java',
                'csharp',
                'cpp',
                'c',
                'rust',
                'go',
                'ruby',
                'swift',
                'kotlin',
                'scala',
                'dart',
                'r',
                'matlab',
                'shell',
                'powershell',
                'dockerfile',
                'nginx',
                'apache',
                'git',
                'diff',
                'text'
            ]
        },
        {
            type: 'string',
            name: 'code',
            label: 'Code',
            description: 'The actual code content',
            ui: {
                component: 'textarea',
                rows: 10,
            },
            required: true,
        },
        {
            type: 'string',
            name: 'filename',
            label: 'Filename',
            description: 'Optional filename to display',
        },
        {
            type: 'boolean',
            name: 'showLineNumbers',
            label: 'Show Line Numbers',
            description: 'Display line numbers in the code block',
        },
        {
            type: 'boolean',
            name: 'copyButton',
            label: 'Show Copy Button',
            description: 'Display a copy button for the code',
        }
    ]
}
