# MegaBlog

A full-featured blogging platform built with React.js and Appwrite, offering a complete content management experience with user authentication, post creation, and real-time interactions.

## Features

### User Management
- 🔐 **User Authentication** - Secure signup and login using Appwrite Auth
- 👤 **User Profiles** - Personalized user profiles and account management
- 🚪 **Session Management** - Secure logout with token clearing

### Post Management
- ✍️ **Create Posts** - Rich text editor (TinyMCE) for creating blog content
- 📝 **Edit Posts** - Update and modify existing blog posts
- 🗑️ **Delete Posts** - Remove unwanted posts
- 👁️ **View Posts** - Browse and read all published blog posts
- 📋 **Post Listing** - Organized display of all blog posts

### Content Features
- 🖼️ **Image Upload** - Add featured images to blog posts
- 📊 **Post Status** - Mark posts as draft or published
- 🔍 **Content Management** - Full CRUD operations on blog posts

## Tech Stack

### Frontend
- **React.js** - UI library for building interactive interfaces
- **Redux Toolkit (RTK)** - State management
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **TinyMCE** - Rich text editor for content creation
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Appwrite** - Backend-as-a-Service (BaaS) platform
  - Authentication
  - Database
  - Storage
  - Real-time APIs

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Appwrite account (Cloud or Self-hosted)

### Appwrite Setup

1. Create an Appwrite account at [appwrite.io](https://appwrite.io)
2. Create a new project
3. Note down your:
   - Project ID
   - API Endpoint
   - Database ID
   - Collection ID
   - Bucket ID (for file storage)

### Installation

1. Clone the repository

```bash
git clone https://github.com/vdeb99/MegaBlog.git
cd MegaBlog
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Appwrite credentials:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Appwrite Configuration

### Database Schema

Create a collection in Appwrite with the following attributes:

- **title** (String, Required) - Post title
- **content** (String, Required) - Post content
- **featuredImage** (String) - Image file ID
- **status** (String, Required) - Post status (active/inactive)
- **userId** (String, Required) - Author user ID
- **slug** (String, Required) - URL-friendly post identifier

### Storage Bucket

Create a storage bucket for storing featured images with appropriate permissions.

### Authentication

Enable Email/Password authentication in your Appwrite project settings.

## Project Structure

```
MegaBlog/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header/     # Navigation header
│   │   ├── Footer/     # Page footer
│   │   ├── PostCard/   # Post preview card
│   │   ├── PostForm/   # Post creation/edit form
│   │   └── RTE/        # Rich Text Editor component
│   ├── pages/          # Page components
│   │   ├── Home.jsx    # Homepage
│   │   ├── AllPosts.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   ├── Post.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── appwrite/       # Appwrite service configuration
│   │   ├── auth.js     # Authentication service
│   │   ├── config.js   # Database and storage service
│   │   └── conf.js     # Environment configuration
│   ├── store/          # Redux store configuration
│   │   └── authSlice.js
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Static assets
├── .env               # Environment variables
└── package.json       # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage Guide

### Creating a Blog Post

1. Sign up or log in to your account
2. Click on "Add Post" in the navigation
3. Fill in the post title
4. Write your content using the rich text editor
5. Upload a featured image (optional)
6. Set the post status (Active/Inactive)
7. Click "Submit" to publish

### Managing Posts

- **View All Posts** - Navigate to the "All Posts" page
- **Edit Post** - Click on a post and select "Edit"
- **Delete Post** - Click on a post and select "Delete"
- **View Single Post** - Click on any post card to read the full content

## Features in Detail

### Rich Text Editor
- Bold, italic, underline formatting
- Headings and paragraphs
- Lists (ordered and unordered)
- Links and images
- Code blocks
- Text alignment

### Image Management
- Upload featured images for posts
- Images stored securely in Appwrite Storage
- Automatic image optimization
- Preview before publishing

### State Management
- Redux Toolkit for global state
- Persistent authentication state
- Optimized re-renders
- Centralized data flow

## Security Features

- Secure authentication with Appwrite
- Protected routes for authenticated users
- Server-side validation
- Secure file uploads
- XSS protection

## Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

### Deploy Options

- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with continuous integration
- **GitHub Pages** - Free hosting for static sites
- **Appwrite Functions** - Deploy backend logic

## Environment Variables

Required environment variables:

```
VITE_APPWRITE_URL          # Appwrite API endpoint
VITE_APPWRITE_PROJECT_ID   # Your Appwrite project ID
VITE_APPWRITE_DATABASE_ID  # Database ID
VITE_APPWRITE_COLLECTION_ID # Collection ID for posts
VITE_APPWRITE_BUCKET_ID    # Storage bucket ID for images
```

## Troubleshooting

### Common Issues

**Authentication errors:**
- Verify Appwrite credentials in .env file
- Check if Email/Password auth is enabled

**Image upload fails:**
- Verify bucket permissions in Appwrite Console
- Check file size limits

**Posts not displaying:**
- Verify collection permissions
- Check database connection

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check Appwrite documentation at [appwrite.io/docs](https://appwrite.io/docs)
- Join the Appwrite Discord community

## Acknowledgments

- Built with [React.js](https://reactjs.org/)
- Backend powered by [Appwrite](https://appwrite.io/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Rich text editing with [TinyMCE](https://www.tiny.cloud/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## Learn More

- [React Documentation](https://reactjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [TinyMCE Documentation](https://www.tiny.cloud/docs/)

---

Made with ❤️ by [vdeb99](https://github.com/vdeb99)