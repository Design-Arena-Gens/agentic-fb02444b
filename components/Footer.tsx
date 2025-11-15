export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/70">
      <div className="container-app flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>? {new Date().getFullYear()} Aurora. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Status</a>
        </div>
      </div>
    </footer>
  );
}
