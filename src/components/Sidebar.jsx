import { mockPosts, categories, allTags } from "@/data/mockPosts.ts";
import { Link } from "react-router";
import { Clock, TrendingUp, Tag } from "lucide-react";

export function Sidebar() {
  const recentPosts = mockPosts.slice(0, 4);
  const popularPosts = [...mockPosts].sort((a, b) => b.views - a.views).slice(0, 3);
  const popularTags = allTags.slice(0, 10);

  return (
    <aside className="space-y-6">
      {/* Categories */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-3 py-1.5 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 text-sm rounded-lg transition-colors border border-gray-200 hover:border-blue-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="block group"
            >
              <div className="flex gap-3">
                <span className="text-2xl font-bold text-blue-600/20 group-hover:text-blue-600/40 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-600" />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="block group"
            >
              <div className="flex gap-3">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Tag className="h-5 w-5 text-blue-600" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 text-xs rounded-lg transition-colors border border-gray-200 hover:border-blue-200"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}