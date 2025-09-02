import { useEffect } from "react";

export default function Toast({ message, type = "info", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const color = type === "error" ? "bg-red-600" : type === "success" ? "bg-green-600" : "bg-blue-600";

  return (
    <div className={`fixed top-6 right-6 z-50 px-4 py-2 rounded text-white shadow-lg ${color}`}>
      {message}
    </div>
  );
}
