import interviewVideo from '../assets/Interview.mp4';

const InterviewSection = () => (
  <section className="w-full bg-black flex flex-col border-t border-gray-800 pb-8">
    {/* Top navigation */}
    <div className="w-full flex justify-between items-center px-6 md:px-12 pt-6 pb-4">
      <div className="flex gap-6 text-xs font-mono tracking-widest uppercase text-gray-400">
        <span>INNOVATION / <span className="text-white font-bold">MEETS</span></span>
      </div>
      <div className="text-xs font-mono tracking-widest uppercase text-gray-400">
        Role / <span className="text-white font-bold">Art Director & Designer</span>
      </div>
    </div>
    {/* Main block: two columns */}
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-6 md:px-12 mt-4 gap-8">
      {/* Left: Large heading */}
      <div className="flex-1 flex items-center justify-start">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-left leading-tight">THE MESSAGE<br />BEHIND<br />THE ART</h2>
      </div>
      {/* Right: Portrait video, name, quote */}
      <div className="flex-1 flex flex-col items-start md:items-end justify-center">
        <video src={interviewVideo} autoPlay loop muted playsInline className="w-48 md:w-64 aspect-[9/16] object-cover rounded-lg mb-4 shadow-lg" />
        <div className="text-white font-semibold text-sm md:text-base">Stephen Vineburg</div>
        <div className="text-gray-400 text-xs mb-2">Artist and Digital Creator</div>
        <p className="text-gray-300 text-xs md:text-sm max-w-md text-left md:text-right">
          Stephen Vineburg says “My work creates an immersive space to promote thinking about contemporary social issues.” PYTH AI explores humanity's dialogue with technology, offering wearable art for those who want to spark conversation.
        </p>
      </div>
    </div>
    {/* Bottom left: INTERVIEW */}
    <div className="w-full flex flex-row justify-start items-end px-6 md:px-12 mt-4">
      <span className="text-xs text-white font-mono uppercase">INTERVIEW</span>
    </div>
  </section>
);

export default InterviewSection; 