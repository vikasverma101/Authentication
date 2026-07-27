import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, Menu, X, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const linkClasses = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 ${isActive ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="motion-pill flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-lg shadow-indigo-100">
            <ShieldCheck size={18} />
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight text-slate-900">Gath Auth</p>
            <p className="text-xs text-slate-500">Secure access</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {!user ? (
            <>
              <NavLink to="/login" className={linkClasses}>Login</NavLink>
              <NavLink to="/register" className={`${linkClasses({ isActive: false })} motion-pill`}>Register</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/dashboard" className={linkClasses}>
                <span className="flex items-center gap-2">
                  <LayoutDashboard size={16} /> Dashboard
                </span>
              </NavLink>
              <button
                onClick={handleLogout}
                className="motion-pill flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-2">
            {!user ? (
              <>
                <NavLink to="/login" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
                  Login
                </NavLink>
                <NavLink to="/register" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/dashboard" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
                  <span className="flex items-center gap-2">
                    <LayoutDashboard size={16} /> Dashboard
                  </span>
                </NavLink>
                <button onClick={handleLogout} className="flex items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
                  <LogOut size={16} /> Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
