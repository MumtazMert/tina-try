# Overreacted Blog - Built with Next.js and Tina CMS

A simple, elegant blog inspired by [overreacted.io](https://overreacted.io), built with Next.js 15, TypeScript, Tailwind CSS, and Tina CMS.

## Features

- **Clean, Minimal Design**: Inspired by Dan Abramov's blog with a focus on readability
- **Tina CMS Integration**: Visual content management for easy blog post creation and editing
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **TypeScript**: Full type safety throughout the application
- **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tina
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
tina/
├── app/
│   ├── components/
│   │   ├── BlogList.tsx      # Blog listing component
│   │   └── BlogPost.tsx      # Individual blog post component
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic blog post pages
│   ├── globals.css           # Global styles and prose styling
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage with blog listing
├── content/
│   └── posts/                # Blog post markdown files
├── tina/
│   └── config.ts             # Tina CMS configuration
└── package.json
```

## Blog Post Format

Blog posts are written in Markdown with frontmatter:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15T10:00:00.000Z"
excerpt: "A brief description of your post"
tags: ["react", "javascript", "tutorial"]
---

# Your Content Here

Your blog post content goes here...
```

## Tina CMS Setup

This project uses Tina CMS for content management. To set up Tina Cloud:

### **Step 1: Create Tina Cloud Account**
1. Visit [tina.io](https://tina.io) and create an account
2. Create a new project
3. Get your `clientId` and `token` from the project dashboard

### **Step 2: Configure Environment Variables**
1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```
2. Edit `.env.local` and add your Tina Cloud credentials:
   ```bash
   NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
   TINA_TOKEN=your_token_here
   TINA_PUBLIC_IS_LOCAL=false
   ```

### **Step 3: Enable Contextual Editing**
Once you have Tina Cloud set up, you'll be able to:
- Edit content directly on your website
- Use the visual block editor
- Access the full Tina CMS interface
- Use contextual editing features

### **Local Development (Current Setup)**
Currently, you're running in local development mode. This allows you to:
- View and edit content through the admin interface
- Test the blog functionality
- Develop and customize the site

To switch to full Tina Cloud mode, follow the steps above.

## Customization

### Styling

The blog uses Tailwind CSS with custom prose styles. You can customize the appearance by modifying:

- `app/globals.css` - Global styles and prose typography
- `app/components/BlogList.tsx` - Blog listing layout
- `app/components/BlogPost.tsx` - Individual post layout

### Content

- Blog posts are stored in `content/posts/`
- The Tina CMS schema is configured in `tina/config.ts`
- You can add new fields to the blog post schema as needed

### Metadata

Update the blog metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Blog Name",
  description: "Your blog description",
  // ... other metadata
};
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your Tina Cloud environment variables
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Development

### Available Scripts

- `npm run dev` - Start development server with Tina CMS
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Posts

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter with title, date, excerpt, and tags
3. Write your content in Markdown
4. The post will automatically appear in the blog listing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for your own blog!

## Acknowledgments

- Inspired by [overreacted.io](https://overreacted.io) by Dan Abramov
- Built with [Next.js](https://nextjs.org), [Tina CMS](https://tina.io), and [Tailwind CSS](https://tailwindcss.com)
# tina-try
