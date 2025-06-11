import sustainabilityBgVideo from '../assets/sustainability-bg.mp4'; // placeholder, replace with your video

const SustainabilitySection = () => (
  <section className="w-full bg-black flex flex-col border-t border-gray-800 pb-8">
    {/* Top navigation */}
    <div className="w-full flex justify-between items-center px-6 md:px-12 pt-6 pb-4">
      <div className="flex gap-6 text-xs font-mono tracking-widest uppercase text-gray-400">
        <span>ART / <span className="text-white font-bold">EXPRESSION</span></span>
        <span>Field / <span className="text-white font-bold">Fintech as a Service</span></span>
      </div>
      <div className="text-xs font-mono tracking-widest uppercase text-gray-400">
        Role / <span className="text-white font-bold">PYTH AI</span>
      </div>
    </div>
    {/* Main block with background video and overlay text */}
    <div className="w-full max-w-7xl mx-auto relative aspect-[2.7/1] flex items-center justify-center overflow-hidden mb-4">
      <video src={sustainabilityBgVideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full flex items-center justify-center h-full">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center leading-tight">SUSTAINABILITY<br />MEETS<br />INNOVATION</h2>
      </div>
    </div>
    {/* Bottom bar */}
    <div className="w-full flex flex-row justify-between items-start px-6 md:px-12 mt-2">
      <p className="text-gray-300 text-xs md:text-sm max-w-xl text-left">
        PYTH AI merges fashion and technology with a commitment to sustainability. By introducing digital enhancements—like the second AR filter—you can evolve your hoodie over time without replacing it. This forward-thinking approach reduces waste while keeping the garment fresh and meaningful.
      </p>
      <span className="text-xs text-white font-mono uppercase">SUSTAINABILITY</span>
    </div>
  </section>
);

export default SustainabilitySection; 