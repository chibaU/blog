# Blog Application

A modern, full-featured blog platform built with React, Vite, and Tailwind CSS. Create, edit, and manage blog posts with an intuitive user interface.

## 🔗 Links

- **[GitHub Repository](https://github.com/chibaU/blog)** - Source code and issue tracking
- **[Live Demo](https://chiba-blog.vercel.app/)** - Try the application live

## Features

- **User Authentication** - Login and registration pages with secure user management
- **Create & Edit Posts** - Write and edit blog posts with an easy-to-use editor
- **View Posts** - Display blog posts with rich content and metadata
- **Search Functionality** - Search through posts efficiently
- **Dark Mode** - Theme switching with next-themes
- **Responsive Design** - Mobile-friendly layout with Tailwind CSS
- **Toast Notifications** - User feedback with Sonner notifications
- **Post Management** - View, filter, and organize posts from the sidebar

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React & Icons Pack
- **Animations**: Motion
- **UI Components**: Sonner (Toast), Custom Components
- **Theme Management**: next-themes
- **Code Quality**: ESLint

## Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navbar.jsx       # Navigation bar
│   ├── Sidebar.jsx      # Side navigation
│   ├── PostCard.jsx     # Blog post card component
│   ├── SearchBar.jsx    # Search functionality
│   ├── Newsletter.jsx   # Newsletter signup
│   ├── Layout.jsx       # Main layout wrapper
│   └── LoadingSpinner.jsx # Loading indicator
├── pages/               # Page components
│   ├── Home/            # Homepage with post listing
│   ├── SinglePost/      # Individual post view
│   ├── CreatePost/      # New post creation
│   ├── EditPost/        # Post editing
│   ├── Login/           # User login
│   ├── Register/        # User registration
│   └── NotFound/        # 404 page
├── data/                # Mock data
│   └── mockPosts.ts     # Sample blog posts
├── styles/              # Global styles
│   ├── index.css        # Main styles
│   └── theme.css        # Theme configuration
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd blog
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Usage

1. **Home Page** - View all blog posts and use search to filter
2. **Read Post** - Click on any post card to view the full content
3. **Create Post** - Click the "New Post" button to create a new blog post
4. **Edit Post** - Edit existing posts from the post detail page
5. **Authentication** - Register for an account or login to access post creation

## Components

### Layout Components
- **Navbar** - Top navigation with branding and links
- **Sidebar** - Side navigation for additional features
- **Layout** - Wrapper component for consistent page structure

### Feature Components
- **PostCard** - Displays blog post preview with title, excerpt, and metadata
- **SearchBar** - Search posts by keywords
- **Newsletter** - Email signup component
- **ImageWithFallback** - Image component with fallback handling
- **LoadingSpinner** - Loading state indicator

## Styling

The project uses Tailwind CSS for styling with custom theme configuration in [theme.css](src/styles/theme.css). Customize colors, spacing, and other design tokens as needed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

**Chiba Abdallah** - Developer

---

Feel free to reach out with questions, suggestions, or contributions!
