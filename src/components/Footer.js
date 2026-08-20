import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          © 2026 Risma Paramesti
          <div className="mt-1">Dibuat menggunakan React.js dan Tailwind CSS</div>
        </div>
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/rismaparamesti"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-cyan-600"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href="https://linkedin.com/in/rismaparamesti"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-cyan-600"
          >
            <FiLinkedin className="text-lg" />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email" className="transition hover:text-cyan-600">
            <FiMail className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
