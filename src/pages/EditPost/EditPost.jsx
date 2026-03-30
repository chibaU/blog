import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Save, ArrowLeft, Image as ImageIcon, FileText, Tag } from "lucide-react";
import { toast } from "sonner";
import { categories, mockPosts } from "@/data/mockPosts.ts";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "Development",
  });
  const [errors, setErrors] = useState({});

  // Load post data
  useEffect(() => {
    const post = mockPosts.find(p => p.id === id);
    if (post) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        title: post.title,
        description: post.description,
        content: post.content.replace(/<[^>]*>/g, '').trim(), // Strip HTML for editing
        category: post.category,
      });
    }
  }, [id]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title) {
      newErrors.title = "Title is required";
    } else if (formData.title.length < 5) {
      newErrors.title = "Title must be at least 5 characters";
    } else if (formData.title.length > 100) {
      newErrors.title = "Title must be less than 100 characters";
    }

    if (!formData.description) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    } else if (formData.description.length > 200) {
      newErrors.description = "Description must be less than 200 characters";
    }

    if (!formData.content) {
      newErrors.content = "Content is required";
    } else if (formData.content.length < 50) {
      newErrors.content = "Content must be at least 50 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Post updated successfully!");
      navigate(`/post/${id}`);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const getCharacterCountColor = (current, max) => {
    const percentage = (current / max) * 100;
    if (percentage > 90) return "text-red-600";
    if (percentage > 70) return "text-yellow-600";
    return "text-gray-500";
  };

  const post = mockPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Post Not Found</h2>
          <p className="text-gray-600 mb-6">The post you're trying to edit doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to={`/post/${id}`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Post</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Edit Post</h1>
          <p className="text-gray-600">Update your post content and settings</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Input */}
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    Post Title *
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg ${
                      errors.title ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Enter a compelling title that captures attention..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.title ? (
                      <p className="text-sm text-red-600">{errors.title}</p>
                    ) : (
                      <p className="text-sm text-gray-500">Make it catchy and descriptive</p>
                    )}
                    <span className={`text-xs ${getCharacterCountColor(formData.title.length, 100)}`}>
                      {formData.title.length}/100
                    </span>
                  </div>
                </div>

                {/* Category Select */}
                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-blue-600" />
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    {categories.filter(cat => cat !== "All").map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-gray-500 mt-2">Choose the most relevant category</p>
                </div>

                {/* Description Textarea */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                    Short Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                      errors.description ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Write a brief, engaging description that summarizes your post..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.description ? (
                      <p className="text-sm text-red-600">{errors.description}</p>
                    ) : (
                      <p className="text-sm text-gray-500">This appears in post previews</p>
                    )}
                    <span className={`text-xs ${getCharacterCountColor(formData.description.length, 200)}`}>
                      {formData.description.length}/200
                    </span>
                  </div>
                </div>

                {/* Content Textarea */}
                <div>
                  <label htmlFor="content" className="block text-sm font-semibold text-gray-900 mb-2">
                    Post Content *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={16}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none font-mono text-sm ${
                      errors.content ? "border-red-300 bg-red-50" : "border-gray-300"
                    }`}
                    placeholder="Write your post content here..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.content ? (
                      <p className="text-sm text-red-600">{errors.content}</p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {formData.content.length} characters • {Math.ceil(formData.content.split(' ').length / 200)} min read
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-sm hover:shadow-md"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Updating Post...
                      </>
                    ) : (
                      <>
                        <Save className="h-5 w-5" />
                        Update Post
                      </>
                    )}
                  </button>
                  <Link
                    to={`/post/${id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Sidebar Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Tips Card */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-blue-600" />
                  Editing Tips
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Review for clarity and flow</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Check for spelling and grammar</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Update outdated information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Ensure links are working</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Preview before saving</span>
                  </li>
                </ul>
              </div>

              {/* Preview Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Preview</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Title</p>
                    <p className="font-semibold text-gray-900 line-clamp-2">
                      {formData.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Description</p>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {formData.description}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      {formData.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}