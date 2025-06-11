import wearableBgVideo from '../assets/wearable-bg.mp4';

const WearableExpressionSection = () => (
  <section className="w-full bg-black flex flex-col border-t border-gray-800 pb-8">
    {/* Top navigation */}
    <div className="w-full flex justify-between items-center px-6 md:px-12 pt-6 pb-4">
      <div className="flex gap-6 text-xs font-mono tracking-widest uppercase text-gray-400">
        <span>ART / ICONIC</span>
        <span>ART / <span className="text-white font-bold">DESIGN</span></span>
      </div>
      <div className="text-xs font-mono tracking-widest uppercase text-gray-400">
        PROJECTS / <span className="text-white font-bold">Artist & Creator</span>
      </div>
    </div>
    {/* Main block with background video and overlay text */}
    <div className="w-full max-w-7xl mx-auto relative aspect-[2.7/1] flex items-center justify-center overflow-hidden mb-4">
      <video src={wearableBgVideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full flex items-center justify-center h-full">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center leading-tight">WEARABLE<br />EXPRESSION</h2>
      </div>
    </div>
    {/* Bottom bar */}
    <div className="w-full flex flex-row justify-between items-start px-6 md:px-12 mt-2">
      <span className="text-xs text-white font-mono uppercase">WEARABLE</span>
      <p className="text-gray-300 text-xs md:text-sm max-w-xl text-right">
        Designed for those who challenge convention, embrace innovation, and ask the tough questions. The PYTH AI hoodie is more than just fashion, it is a platform for ideas.
      </p>
    </div>
  </section>
);

export default WearableExpressionSection; 