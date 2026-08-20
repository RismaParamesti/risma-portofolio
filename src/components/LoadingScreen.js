import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="h-16 w-16 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <div className="h-full w-full rounded-xl border-[3px] border-cyan-300 border-t-transparent animate-spin" />
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">Risma Paramesti</p>
          <p className="text-sm text-slate-300">Loading portfolio...</p>
        </div>
      </motion.div>
    </div>
  );
}
