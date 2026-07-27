import { useEffect, useState } from 'react';
import { CheckCircle2, KeyRound, LayoutDashboard, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getDashboard } from '../services/authService';

const Dashboard = () => {
  const { user, accessToken } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboard(accessToken);
        setDashboardData(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Could not load dashboard');
      }
    };

    if (accessToken) loadDashboard();
  }, [accessToken]);

  return (
    <div className="page-transition px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="motion-card rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                <Sparkles size={15} /> Welcome back
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {dashboardData?.user?.name || user?.name || 'Your dashboard'}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-600">
                You’re authenticated successfully and can view protected content with a polished, premium experience.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-700">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} /> Protected route active
              </div>
            </div>
          </div>

          {error && <p className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <UserRound size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Profile</p>
                    <p className="text-xl font-semibold text-slate-900">{dashboardData?.user?.name || 'Your profile'}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="mt-1 font-medium text-slate-900">{dashboardData?.user?.email || user?.email || '—'}</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-sm text-slate-500">Member since</p>
                    <p className="mt-1 font-medium text-slate-900">Verified account</p>
                  </div>
                </div>
              </div>

              <div className="motion-card rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-indigo-900 p-6 text-white">
                <div className="flex items-center gap-2 text-sm font-medium text-indigo-200">
                  <LayoutDashboard size={16} /> Quick stats
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-2xl font-semibold">01</p>
                    <p className="mt-1 text-sm text-indigo-100">Active session</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-2xl font-semibold">JWT</p>
                    <p className="mt-1 text-sm text-indigo-100">Token auth</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="text-2xl font-semibold">100%</p>
                    <p className="mt-1 text-sm text-indigo-100">Protected</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="motion-card rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <CheckCircle2 size={16} className="text-emerald-500" /> Authentication status
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Access token</p>
                    <p className="mt-1 truncate font-medium text-slate-900">{accessToken ? 'Present and active' : 'Not available'}</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Refresh token</p>
                    <p className="mt-1 font-medium text-slate-900">Supported securely</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Protected route</p>
                    <p className="mt-1 font-medium text-slate-900">Verified</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <KeyRound size={16} className="text-indigo-600" /> JWT status
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {dashboardData?.message || 'Your session is secure and ready for protected API requests.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
