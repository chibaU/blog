import { useState } from "react";
import { Mail, Send } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // إزالة تعريف النوع (e: React.FormEvent)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-white shadow-xl">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-4">
          <Mail className="h-7 w-7" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Subscribe to our Newsletter</h3>
        <p className="text-blue-100 mb-6">
          Get the latest articles and updates delivered directly to your inbox. No spam, unsubscribe anytime.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Subscribing...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Subscribe
              </>
            )}
          </button>
        </form>
        
        <p className="text-blue-100 text-sm mt-4">
          Join 10,000+ developers already subscribed
        </p>
      </div>
    </div>
  );
}