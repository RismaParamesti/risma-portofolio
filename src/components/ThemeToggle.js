import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
    </button>
  );
}
