
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-indigo-400 font-semibold tracking-widest uppercase mb-4">
          KhdmaLink
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find the right talent.
          <br />
          Get your work done.
        </h1>

        <p className="text-slate-300 text-lg mb-8">
          Connect with talented freelancers and bring your projects to life.
        </p>

        <Link
          to="/auth"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-500"
        >
          Commencer
        </Link>
      </div>
    </main>
  );
}
