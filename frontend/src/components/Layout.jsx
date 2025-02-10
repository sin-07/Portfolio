import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/projects" className="mr-4">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <main className="p-6">{children}</main>
      <footer className="bg-gray-900 p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Aniket Singh</p>
      </footer>
    </div>
  );
}