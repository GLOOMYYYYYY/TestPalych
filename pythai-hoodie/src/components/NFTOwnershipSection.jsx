import ownershipBgVideo from '../assets/ownership-bg.mp4'; // placeholder, replace with your video

const NFTOwnershipSection = () => (
  <section className="w-full bg-black flex flex-col border-t border-gray-800 pb-8">
    {/* Top navigation */}
    <div className="w-full flex justify-between items-center px-6 md:px-12 pt-6 pb-4">
      <div className="flex gap-6 text-xs font-mono tracking-widest uppercase text-gray-400">
        <span>NFT / <span className="text-white font-bold">COLLE</span> / PYTH AI</span>
      </div>
      <div className="text-xs font-mono tracking-widest uppercase text-gray-400">
        Role / <span className="text-white font-bold">Art Director & Designer</span>
      </div>
    </div>
    {/* Main block with background video and overlay text */}
    <div className="w-full max-w-7xl mx-auto relative aspect-[2.7/1] flex items-center justify-center overflow-hidden mb-4">
      <video src={ownershipBgVideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full flex items-center justify-end h-full pr-12">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-right leading-tight">A UNIQUE<br />DIGITAL<br />TOKEN</h2>
      </div>
    </div>
    {/* Bottom bar */}
    <div className="w-full flex flex-row justify-between items-start px-6 md:px-12 mt-2">
      <p className="text-gray-300 text-xs md:text-sm max-w-xl text-left">
        Every PYTH AI hoodie comes with its own exclusive PYTH AI NFT—a digital certificate that guarantees the authenticity and provenance of your garment. Beyond that, it opens the door to potential future perks like unique digital experiences, events, and updates. Wear it, own it, prove it.
      </p>
      <span className="text-xs text-white font-mono uppercase">FOUNDATION</span>
    </div>
  </section>
);

export default NFTOwnershipSection; 