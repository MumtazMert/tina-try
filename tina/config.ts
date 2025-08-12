import { defineConfig } from 'tinacms';
import { codeBlock } from '../app/blocks/code-block.template';
import { calloutBlock } from '../app/blocks/callout-block.template';
import { imageGalleryBlock } from '../app/blocks/image-gallery-block.template';
import { tableBlock } from '../app/blocks/table-block.template';
import { videoBlock } from '../app/blocks/video-block.template';
import { quoteBlock } from '../app/blocks/quote-block.template';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
   branch,

   // Get this from tina.io
   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
   // Get this from tina.io
   token: process.env.TINA_TOKEN,

   build: {
      outputFolder: 'admin',
      publicFolder: 'public',
   },
   media: {
      tina: {
         mediaRoot: '',
         publicFolder: 'public',
      },
   },
   // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
   schema: {
      collections: [
         {
            name: 'post',
            label: 'Blog Posts',
            path: 'content/posts',
            format: 'md',
            fields: [
               {
                  type: 'string',
                  name: 'title',
                  label: 'Title',
                  required: true,
               },
               {
                  type: 'datetime',
                  name: 'date',
                  label: 'Date',
                  required: true,
               },
               {
                  type: 'string',
                  name: 'excerpt',
                  label: 'Excerpt',
                  description: 'A brief description of the post',
               },
               {
                  type: 'string',
                  name: 'tags',
                  label: 'Tags',
                  list: true,
                  description: 'Tags for categorizing the post',
               },
               {
                  type: 'object',
                  name: 'blocks',
                  label: 'Content Blocks',
                  list: true,
                  templates: [codeBlock, calloutBlock, imageGalleryBlock, tableBlock, videoBlock, quoteBlock],
               },
               {
                  type: 'rich-text',
                  name: 'body',
                  label: 'Body',
                  isBody: true,
               },
            ],
            ui: {
               router: ({ document }) => {
                  return `/posts/${document._sys.filename}`;
               },
            },
         },
      ],
   },
});
