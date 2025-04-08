
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-molecular-purple">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-2 bg-molecular-blue text-white rounded-md hover:bg-molecular-purple transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
