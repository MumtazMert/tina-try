import { defineConfig } from 'tinacms';
import { codeBlock } from '../app/blocks/code-block.template';
import { calloutBlock } from '../app/blocks/callout-block.template';
import { imageGalleryBlock } from '../app/blocks/image-gallery-block.template';
import { tableBlock } from '../app/blocks/table-block.template';
import { videoBlock } from '../app/blocks/video-block.template';
import { quoteBlock } from '../app/blocks/quote-block.template';

// TinaCMS configuration for blog with content blocks

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

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
         mediaRoot: 'uploads',
         publicFolder: 'public',
      },
   },
   schema: {
      collections: [
         {
            name: 'post',
            label: 'Posts',
            path: 'content/posts',
            format: 'md',
            fields: [
               {
                  type: 'string',
                  name: 'title',
                  label: 'Title',
                  isTitle: true,
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
               },
               {
                  type: 'string',
                  name: 'tags',
                  label: 'Tags',
                  list: true,
               },
               {
                  type: 'string',
                  name: 'author',
                  label: 'Author',
                  description: 'The author of the post',
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
