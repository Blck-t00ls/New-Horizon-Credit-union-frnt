import { useState } from "react";

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>&times;</button>
          <h2 className="text-xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
            {!isLogin && (
              <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded" />
            )}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button className="text-blue-600 underline" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Need an account? Register" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    )
  );
}
