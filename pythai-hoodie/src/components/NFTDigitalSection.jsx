import untitledVideo from '../assets/untitled.png.mp4';
import phoneMock from '../assets/phone.png'; // placeholder, replace with your phone mockup
import snapchatIcon from '../assets/snapchat.png'; // placeholder, replace with your Snapchat icon

const NFTDigitalSection = () => (
  <section className="w-full bg-black pb-12">
    {/* Top: Headline and description in a row */}
    <div className="w-full flex flex-row justify-between items-start bg-white px-6 md:px-16 pt-12 pb-8 border-t border-gray-300">
      <div className="flex-1 flex items-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-0 text-black text-left">
          FEATURES<br />
          <span className="pl-16 md:pl-32">THAT TELL</span><br />
          <span className="pl-10 md:pl-16">A STORY</span>
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <p className="text-black text-sm md:text-base max-w-md text-right">
          The irony is that the answer remains the same. "Know Thyself"<br />
          The PYTH AI hoodie captures this eternal quest for truth, blending the insight of the past with the innovation of the future.
        </p>
      </div>
    </div>
    {/* Tag headings above video */}
    <div className="w-full flex flex-row justify-between items-center px-6 md:px-16 mt-6 mb-2">
      <div className="flex flex-row gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase">
        <span>ART /</span>
        <span className="text-white font-bold">PYTH</span>
        <span>AR /</span>
        <span className="text-white font-bold">DIGITAL FILTER</span>
      </div>
      <div className="flex flex-row gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase">
        <span>EX /</span>
        <span className="text-white font-bold">REALITY EXPERIENCE</span>
      </div>
    </div>
    {/* Video block with overlays */}
    <div className="relative flex justify-center items-center w-full px-[50px]">
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center h-[300px] overflow-hidden rounded-xl">
        {/* Video background */}
        <video src={untitledVideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40" />
        {/* Snapchat icon, above the 'D' in AUGMENTED */}
        {/* (removed the original icon here) */}
        {/* AR Experience text, left side, vertically centered, with attached Snapchat icon */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-start justify-center h-auto">
          <div className="relative">
            <span className="text-white text-5xl md:text-6xl font-bold leading-tight block text-left">AUGMENTED<br />REALITY<br />EXPERIENCE</span>
            <img src={snapchatIcon} alt="Snapchat" className="absolute -right-16 -top-20 w-36 h-36 drop-shadow-lg z-30" />
          </div>
        </div>
        {/* Phone mockup, right side, vertically centered */}
        <img src={phoneMock} alt="AR Filters UI" className="absolute right-40 top-1/2 -translate-y-1/2 w-56 md:w-72 drop-shadow-2xl z-30 hidden md:block" />
      </div>
    </div>
    {/* Case description below video */}
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 mt-4 gap-2">
      <div className="text-xs text-gray-400 mb-1 md:mb-0 md:mr-4">CASE</div>
      <div className="w-full md:w-3/4 ml-[50px]">
        <p className="text-gray-300 text-xs md:text-sm text-left">
          The PYTH AI hoodie integrates two AR filters. One on the front comes is alive from launch, while the second filter on the back will become available post-launch. This feature represents sustainability in action. Instead of buying a new hoodie every season, the garment will digitally update its story, extending its life and value.
        </p>
      </div>
    </div>
  </section>
);

export default NFTDigitalSection; 