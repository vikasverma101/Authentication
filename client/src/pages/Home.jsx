import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Key, Shield, Sparkles } from 'lucide-react';

const features = [
  { title: 'Secure JWT Authentication', description: 'Protected sessions with token-based access for modern apps.' },
  { title: 'Refresh Token Support', description: 'Keep users signed in seamlessly without compromising security.' },
  { title: 'Protected Routes', description: 'Role-aware access control for your most sensitive screens.' },
  { title: 'MongoDB Atlas Ready', description: 'Designed to fit smoothly into a MERN stack deployment.' },
  { title: 'Production Ready', description: 'Clean structure and polished UX suitable for real-world launches.' },
  { title: 'SaaS Inspired UI', description: 'Premium visuals with thoughtful spacing and subtle motion.' }
];

const Home = () => {
  return (
    <div className="page-transition px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
            <Sparkles size={16} />
            Premium authentication experience
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Modern auth that feels <span className="text-indigo-600">calm, secure, and polished</span>.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Build trust from the very first interaction with a refined sign-in experience for your React app, backed by JWTs and protected routes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/register" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-xl">
              Get started <ArrowRight size={16} />
            </Link>
            <Link to="/login" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50">
              Sign in
            </Link>
          </div>
        </div>

        <div className="hero-illustration rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur sm:p-8">
          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50 p-6">
            <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
              <div>
                <p className="text-sm font-semibold text-slate-900">Authentication status</p>
                <p className="text-sm text-slate-500">Protected and ready</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Shield size={18} />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Key size={18} />
                </div>
                <p className="text-sm font-semibold text-slate-900">JWT ready</p>
                <p className="mt-1 text-sm text-slate-500">Secure bearer tokens for your API layer.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <CheckCircle size={18} />
                </div>
                <p className="text-sm font-semibold text-slate-900">Protected routes</p>
                <p className="mt-1 text-sm text-slate-500">Keep the dashboard and private areas sealed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-indigo-50 group-hover:text-indigo-700">
                <CheckCircle size={18} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
