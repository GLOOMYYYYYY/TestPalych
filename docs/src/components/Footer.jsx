const Footer = () => (
  <footer className="w-full py-8 bg-black border-t border-gray-800 flex flex-col items-center">
    <nav className="mb-4 flex flex-wrap gap-6 text-gray-400 text-sm">
      <a href="#" className="hover:text-white transition">Home</a>
      <a href="#" className="hover:text-white transition">Buy</a>
      <a href="#" className="hover:text-white transition">Statement</a>
      <a href="#" className="hover:text-white transition">Contact</a>
    </nav>
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs text-gray-300 font-bold">SV</div>
      <span className="text-gray-500 text-xs">© 2025 Stephen Vineburg | All Rights Reserved</span>
    </div>
  </footer>
);

export default Footer; 