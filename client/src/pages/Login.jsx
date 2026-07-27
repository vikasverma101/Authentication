import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(form);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="motion-card w-full max-w-md rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-10">
        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <ShieldCheck size={20} />
          </div>
        </div>
        <h2 className="mt-6 text-center text-2xl font-semibold text-slate-900">Welcome back</h2>
        <p className="mt-2 text-center text-sm text-slate-500">Sign in to continue to your secure workspace.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {error && <p className="rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
          <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" required />
          <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" autoComplete="current-password" required />
          <Button type="submit" loading={loading}>
            <span className="flex items-center gap-2">
              <Lock size={16} /> Login
            </span>
          </Button>
        </form>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-center text-sm text-slate-600">
          New here?{' '}
          <Link to="/register" className="font-semibold text-indigo-700 transition hover:text-indigo-900">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
