import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-brand-black text-brand-white">
      <h1 className="text-5xl font-bold mb-4 text-brand-orange">404</h1>
      <p className="text-brand-white/80 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="text-brand-blue hover:text-brand-orange font-semibold">Go back home</Link>
    </div>
  );
}


