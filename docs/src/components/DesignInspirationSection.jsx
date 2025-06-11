import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';

const items = [
  { num: '01', title: 'SHELL', desc: 'Sinking Interest', img: d1 },
  { num: '02', title: 'SINKING INTEREST', desc: '', img: d2 },
  { num: '03', title: 'BEEN THERE DONE THAT', desc: '', img: d3 },
  { num: '04', title: 'CELED', desc: '', img: d4 },
];

const DesignInspirationSection = () => (
  <section className="w-full bg-black flex flex-col items-center border-t border-gray-800 pb-8">
    {/* Top navigation */}
    <div className="w-full flex justify-between items-center px-6 md:px-12 pt-6 pb-4">
      <div className="flex gap-6 text-xs font-mono tracking-widest uppercase text-gray-400">
        <span>DESIGN / <span className="text-white font-bold">ARTS</span></span>
        <span>Design / <span className="text-white font-bold">Filters</span></span>
      </div>
      <div className="text-xs font-mono tracking-widest uppercase text-gray-400">
        Cases / <span className="text-white font-bold">ARTS</span>
      </div>
    </div>
    {/* Gallery grid */}
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 md:px-12 mb-4 relative">
      {/* Overlay 'TIMELESS DESIGN' across 3rd and 4th images */}
      <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-[25%] -translate-y-1/2 w-1/2 h-full items-center justify-center text-white text-4xl md:text-6xl font-bold uppercase text-center leading-tight z-20 pointer-events-none select-none">
        <span style={{ marginLeft: '50px', display: 'block' }}>TIMELESS</span><br />DESIGN
      </span>
      {items.map((item, idx) => (
        <div key={item.num} className="relative flex flex-col items-center">
          {/* Image */}
          <div className="w-full aspect-[3/4] bg-gray-800 rounded-none overflow-hidden flex items-center justify-center">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className="w-full flex flex-col items-start mt-2">
            <span className="text-xs text-gray-400">{item.num} / <span className="text-white uppercase">{item.title}</span></span>
            {item.desc && <span className="text-xs text-gray-500">{item.desc}</span>}
          </div>
        </div>
      ))}
    </div>
    {/* Description and AR label */}
    <div className="w-full flex flex-row justify-between items-end px-6 md:px-12 mt-4">
      <p className="text-gray-400 text-xs md:text-sm max-w-2xl text-left">
        The design also draws inspiration from Stephen Vineburg's other works such as Sinking Interest and CELED. Every line and detail reflect themes around what we value, how we see ourselves, and our relationship with technology.
      </p>
      <span className="text-xs text-gray-400 font-mono uppercase ml-4">AR</span>
    </div>
  </section>
);

export default DesignInspirationSection; 