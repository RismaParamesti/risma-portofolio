import { FiArrowUp } from 'react-icons/fi';

export default function BackToTopButton({ visible, onClick }) {
  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
      aria-label="Back to top"
    >
      <FiArrowUp />
    </button>
  );
}
