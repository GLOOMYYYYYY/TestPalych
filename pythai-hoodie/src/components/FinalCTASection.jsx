const socialIcons = [
  { href: '#', label: 'Facebook', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg> },
  { href: '#', label: 'Twitter', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .39.045.765.127 1.124C7.728 8.85 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89-.386.104-.793.16-1.213.16-.297 0-.583-.028-.862-.08.584 1.822 2.28 3.148 4.29 3.184A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.006-.423-.016-.633A9.936 9.936 0 0 0 24 4.557z"/></svg> },
  { href: '#', label: 'Instagram', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.05.425 19.877.131 18.6.072 17.32.013 16.911 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
  { href: '#', label: 'LinkedIn', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z"/></svg> },
];

const FinalCTASection = () => (
  <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center relative" style={{background: 'radial-gradient(ellipse at center, #222 0%, #000 100%)'}}>
    <div className="w-full flex flex-col items-center justify-center pt-16 pb-12">
      <h2 className="text-white text-4xl md:text-6xl font-bold text-center leading-tight mb-6">ARE YOU READY<br />TO ASK<br />THE QUESTION?</h2>
      <p className="text-gray-300 text-xs md:text-sm text-center max-w-lg mb-4">
        The PYTH-IA hoodie merges art and technology, where fashion becomes a way to express ideas. Step into the future. Challenge the present.
      </p>
      <div className="text-white text-lg md:text-2xl font-semibold tracking-widest mt-2">COMING SOON</div>
    </div>
    {/* Footer */}
    <footer className="w-full border-t border-gray-700 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 gap-4 absolute bottom-0 left-0 bg-black/80">
      <div className="text-white font-extrabold text-lg md:text-xl font-mono tracking-widest uppercase">STEPHEN VINEBURG</div>
      <nav className="flex gap-6 text-gray-300 text-sm">
        <a href="#" className="hover:text-white transition">Home</a>
        <a href="#" className="hover:text-white transition">Buy</a>
        <a href="#" className="hover:text-white transition">Statement</a>
        <a href="#" className="hover:text-white transition">Blog</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </nav>
      <div className="flex gap-3">
        {socialIcons.map((icon, i) => (
          <a key={i} href={icon.href} aria-label={icon.label} className="w-8 h-8 flex items-center justify-center bg-black border border-gray-600 rounded text-white hover:bg-gray-800 transition">
            {icon.icon}
          </a>
        ))}
      </div>
    </footer>
  </section>
);

export default FinalCTASection; 