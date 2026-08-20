import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ items, activePath, darkMode, onToggleTheme, mobileOpen, setMobileOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#/" className="text-lg font-bold tracking-tight text-slate-950 dark:text-white">
          Risma Paramesti
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => {
            const isActive =
              activePath === item.path ||
              (item.path !== '/' && activePath.startsWith(item.path));
            return (
              <a
                key={item.path}
                href={`#${item.path}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="ml-2">
            <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
          </div>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      <div
        className={`border-t border-slate-200 bg-white px-4 pb-4 pt-3 dark:border-slate-800 dark:bg-slate-950 md:hidden ${
          mobileOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {items.map((item) => {
            const isActive =
              activePath === item.path ||
              (item.path !== '/' && activePath.startsWith(item.path));
            return (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={() => setMobileOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
