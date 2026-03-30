import { Link } from "react-router";
import { Calendar, User, ArrowRight, Clock, Eye, Heart, BookmarkPlus } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";

export function PostCard({ post, featured = false }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    setIsBookmarked(!isBookmarked);
  };

  if (featured) {
    return (
      <Link to={`/post/${post.id}`}>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group border border-gray-100"
        >
          {/* Cover Image */}
          <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                Featured
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <button
                onClick={handleBookmark}
                className={`p-2.5 rounded-full backdrop-blur-md transition-colors ${
                  isBookmarked ? "bg-blue-600 text-white" : "bg-white/90 text-gray-700 hover:bg-white"
                }`}
              >
                <BookmarkPlus className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
              {post.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 line-clamp-2 text-lg">{post.description}</p>

            {/* Author Info */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
              <img 
                src={post.authorAvatar} 
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString("en-US", { 
                  year: "numeric", 
                  month: "short", 
                  day: "numeric" 
                })}</p>
              </div>
            </div>

            {/* Meta Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views.toLocaleString()}</span>
                </div>
              </div>
              <button
                onClick={handleLike}
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
                  isLiked ? "bg-red-50 text-red-600" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                <span>{likes}</span>
              </button>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden group"
    >
      <div className="md:flex">
        {/* Cover Image */}
        <Link to={`/post/${post.id}`} className="md:w-72 flex-shrink-0">
          <div className="relative h-48 md:h-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>

        <div className="flex-1 p-6 flex flex-col">
          {/* Category & Bookmark */}
          <div className="flex items-start justify-between mb-3">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
              {post.category}
            </span>
            <button
              onClick={handleBookmark}
              className={`p-1.5 rounded-lg transition-colors ${
                isBookmarked ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
              }`}
            >
              <BookmarkPlus className="h-4 w-4" />
            </button>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{post.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <img 
                src={post.authorAvatar} 
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-medium text-gray-900">{post.author}</p>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                  <span>•</span>
                  <span>{post.readTime} min</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 text-sm ${
                  isLiked ? "text-red-600" : "text-gray-500 hover:text-red-600"
                } transition-colors`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                <span className="text-xs">{likes}</span>
              </button>
              <Link
                to={`/post/${post.id}`}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}