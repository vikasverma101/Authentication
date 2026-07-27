import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-semibold">404</h1>
        <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
        <Link to="/" className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-md">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
