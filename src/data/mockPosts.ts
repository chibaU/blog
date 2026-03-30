export const mockPosts = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    description: "Learn the fundamentals of building type-safe React applications with TypeScript.",
    content: `
      <p>TypeScript has become an essential tool for modern React development. In this comprehensive guide, we'll explore how to set up and use TypeScript in your React projects.</p>
      
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static typing to JavaScript, which helps catch errors early in development and improves code quality. When combined with React, it provides excellent autocomplete and refactoring support.</p>
      
      <h2>Setting Up Your Project</h2>
      <p>To get started, you can use Create React App with the TypeScript template or set up your own configuration with Vite. The latter is faster and more modern.</p>
      
      <h2>Basic Types in React</h2>
      <p>Understanding how to type props, state, and events is crucial. Here are some best practices to follow when working with React and TypeScript together.</p>
      
      <h2>Conclusion</h2>
      <p>TypeScript might seem daunting at first, but the benefits far outweigh the learning curve. Start small and gradually add more type safety to your projects.</p>
    `,
    author: "Sarah Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    authorBio: "Senior Frontend Developer with 8+ years of experience. Passionate about React and TypeScript.",
    date: "2026-03-25",
    category: "Development",
    tags: ["React", "TypeScript", "Web Development", "Frontend"],
    readTime: 8,
    views: 12450,
    likes: 342,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop"
  },
  {
    id: "2",
    title: "Modern CSS Techniques for 2026",
    description: "Discover the latest CSS features and techniques that are changing web design.",
    content: `
      <p>CSS has evolved tremendously over the past few years. Let's explore some of the most exciting modern CSS techniques that you should be using in 2026.</p>
      
      <h2>Container Queries</h2>
      <p>Container queries allow you to apply styles based on the size of a container rather than the viewport. This is a game-changer for component-based design.</p>
      
      <h2>CSS Grid and Subgrid</h2>
      <p>Grid layout has become the standard for complex layouts, and subgrid makes it even more powerful by allowing nested grids to align with their parent.</p>
      
      <h2>Custom Properties and calc()</h2>
      <p>CSS custom properties combined with calc() enable dynamic, responsive designs that adapt to user preferences and screen sizes.</p>
    `,
    author: "Michael Chen",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    authorBio: "UI/UX Designer and CSS enthusiast. Creating beautiful web experiences since 2015.",
    date: "2026-03-22",
    category: "Design",
    tags: ["CSS", "Web Design", "Frontend", "UI/UX"],
    readTime: 6,
    views: 8920,
    likes: 267,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=600&fit=crop"
  },
  {
    id: "3",
    title: "The Future of Web Development",
    description: "Exploring emerging trends and technologies shaping the future of web development.",
    content: `
      <p>The web development landscape is constantly evolving. Let's look at what the future holds for web developers and the technologies we'll be using.</p>
      
      <h2>Edge Computing</h2>
      <p>Edge computing is bringing computation closer to users, resulting in faster load times and better user experiences worldwide.</p>
      
      <h2>AI-Assisted Development</h2>
      <p>AI tools are becoming increasingly sophisticated, helping developers write better code faster and catch bugs before they reach production.</p>
      
      <h2>Web Assembly</h2>
      <p>WebAssembly is enabling high-performance applications in the browser, opening up new possibilities for web-based software.</p>
    `,
    author: "Emily Rodriguez",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    authorBio: "Tech writer and full-stack developer. Exploring the intersection of AI and web development.",
    date: "2026-03-20",
    category: "Technology",
    tags: ["Web Development", "AI", "Future Tech", "Innovation"],
    readTime: 10,
    views: 15630,
    likes: 489,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    description: "A comprehensive guide to creating inclusive and accessible web experiences.",
    content: `
      <p>Accessibility isn't just a nice-to-have feature—it's essential for creating inclusive web experiences. Here's how to build accessible applications from the ground up.</p>
      
      <h2>Semantic HTML</h2>
      <p>Using the correct HTML elements is the foundation of accessibility. Semantic HTML helps screen readers and other assistive technologies understand your content.</p>
      
      <h2>Keyboard Navigation</h2>
      <p>Ensure all interactive elements can be accessed and operated using only a keyboard. This is crucial for users who cannot use a mouse.</p>
      
      <h2>ARIA Attributes</h2>
      <p>When semantic HTML isn't enough, ARIA attributes can provide additional context to assistive technologies.</p>
    `,
    author: "David Kim",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    authorBio: "Accessibility advocate and senior web developer. Making the web inclusive for everyone.",
    date: "2026-03-18",
    category: "Accessibility",
    tags: ["Accessibility", "A11y", "Web Development", "Best Practices"],
    readTime: 7,
    views: 6780,
    likes: 198,
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop"
  },
  {
    id: "5",
    title: "State Management in Modern React",
    description: "Comparing different state management solutions for React applications.",
    content: `
      <p>State management is one of the most important aspects of building React applications. Let's compare different approaches and find the right solution for your project.</p>
      
      <h2>Local State with Hooks</h2>
      <p>For simple applications, React's built-in useState and useReducer hooks are often sufficient. They're lightweight and easy to understand.</p>
      
      <h2>Context API</h2>
      <p>The Context API is great for sharing state across components without prop drilling, but it can cause performance issues if not used carefully.</p>
      
      <h2>External Libraries</h2>
      <p>Libraries like Zustand, Jotai, and Redux Toolkit offer powerful features for complex state management needs.</p>
    `,
    author: "Lisa Anderson",
    authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    authorBio: "React specialist and technical educator. Simplifying complex concepts for developers.",
    date: "2026-03-15",
    category: "Development",
    tags: ["React", "State Management", "JavaScript", "Frontend"],
    readTime: 9,
    views: 11200,
    likes: 401,
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop"
  },
  {
    id: "6",
    title: "Optimizing Web Performance",
    description: "Techniques and strategies for building lightning-fast web applications.",
    content: `
      <p>Performance is crucial for user experience and SEO. Here are proven techniques to make your web applications faster.</p>
      
      <h2>Code Splitting</h2>
      <p>Load only the code you need when you need it. Code splitting can dramatically reduce initial load times.</p>
      
      <h2>Image Optimization</h2>
      <p>Images are often the largest assets on a page. Use modern formats like WebP and AVIF, and implement lazy loading.</p>
      
      <h2>Caching Strategies</h2>
      <p>Proper caching can make your application feel instant. Learn about service workers and HTTP caching headers.</p>
    `,
    author: "James Wilson",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    authorBio: "Performance engineer obsessed with making the web faster. Core Web Vitals expert.",
    date: "2026-03-12",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Development", "SEO"],
    readTime: 11,
    views: 9540,
    likes: 315,
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
  }
];

export const categories = ["All", "Development", "Design", "Technology", "Accessibility", "Performance"];

export const allTags = [
  "React", "TypeScript", "CSS", "JavaScript", "Web Development", 
  "Frontend", "UI/UX", "Accessibility", "Performance", "SEO",
  "AI", "Future Tech", "Best Practices", "State Management"
];