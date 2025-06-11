import topImg from '../assets/top.png';
import bottomVideo from '../assets/bottom.mp4';

const ProductStatementSection = () => (
  <section className="w-full min-h-screen bg-black flex flex-col justify-between border-t border-gray-800 relative overflow-hidden py-16">
    {/* Top info: Selected Work / Hoodie */}
    <div className="w-full flex flex-col gap-1 px-8 pt-2 text-xs text-gray-400 z-40">
      <div className="flex justify-between">
        <span>/Selected work</span>
        <span>Hoodie/ <span className="text-white">Pyth Ai</span></span>
      </div>
      <div className="text-xs text-gray-500">Client / <span className="text-white">Stephen Vineburg</span> | Hoodie / <span className="text-white">PYTH AI</span></div>
    </div>
    {/* Central video background with overlays */}
    <div className="relative flex justify-center items-center w-full mt-8 mb-8 px-[50px]">
      {/* Video background, centered, limited height */}
      <div className="relative w-full mx-auto flex justify-center items-center" style={{minHeight: '380px', maxHeight: '480px'}}>
        <video
          className="w-full h-full object-cover shadow-2xl"
          style={{maxHeight: '480px', minHeight: '380px'}}
          src={bottomVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay above video, below content */}
        <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />
        {/* Overlay content */}
        {/* Top-left: Title and subtitle */}
        <div className="absolute top-0 left-0 p-8 flex flex-col items-start z-20">
          <h2 className="text-4xl md:text-5xl text-white leading-tight mb-0 drop-shadow-lg">
            MORE THAN A HOODIE —
          </h2>
          <div className="text-4xl md:text-6xl text-white mt-1 drop-shadow-lg" style={{ letterSpacing: '-0.03em' }}>
            A — <span className="font-normal">Statement</span>
          </div>
        </div>
        {/* Bottom-right: Description, button, size choice */}
        <div className="absolute bottom-0 right-0 p-8 flex flex-col items-start max-w-md z-20 text-left">
          <p className="text-gray-200 text-[10px] md:text-xs mb-4 drop-shadow-lg">
            The PYTH AI hoodie is not just a garment—it is wearable art. It is a bold symbol of humanity's evolving relationship with artificial intelligence. Inspired by ancient wisdom and modern creativity, this hoodie invites you to question, reflect and express.
          </p>
          <button className="px-8 py-3 rounded-full border border-white bg-transparent text-white text-lg shadow-lg hover:bg-white hover:text-black transition mb-4">Buy Now</button>
          <div className="flex items-center gap-4 text-xs text-gray-300">
            <span className="text-lg mr-1">⟶</span>
            <span>FNT</span>
            <span>CHOOSE THE SIZE</span>
          </div>
        </div>
        {/* Bottom-left: Hoodie image (30% larger) */}
        <img
          src={topImg}
          alt="PYTH AI Hoodie"
          className="absolute bottom-0 left-0 z-20 w-[203px] md:w-[304px] -mb-4 ml-4 pointer-events-none select-none rounded-xl object-contain hidden md:block"
          style={{maxWidth: '68vw', maxHeight: '90%', filter: 'drop-shadow(0 0 32px rgba(128,0,32,0.15)) drop-shadow(0 0 16px rgba(128,0,32,0.15)) drop-shadow(0 0 8px rgba(128,0,32,0.15))'}}
        />
      </div>
    </div>
    {/* Bottom Sizes (outside video, for extra clarity if needed) */}
    <div className="w-full flex justify-start px-8 pb-2 text-xs text-gray-400 z-40">
      <span>S / M / L / XL</span>
    </div>
  </section>
);

export default ProductStatementSection;
