import React from 'react';
import img1 from '../assets/ImageMessageSection1.png';
import img2 from '../assets/ImageMessageSection2.png';
import img3 from '../assets/ImageMessageSection3.png';

const ImageMessageSection = () => (
  <section className="w-full py-16 bg-white flex flex-col items-center">
    <div className="text-black text-center font-bold w-full flex flex-col items-center gap-y-2">
      <div className="flex justify-center items-center text-4xl md:text-6xl leading-tight gap-x-4">
        <span>IN MODERN TIMES</span>
        <img src={img1} alt="art1" className="inline-block rounded-md align-middle w-16 h-16 object-cover" />
      </div>
      <div className="flex justify-center items-center text-4xl md:text-6xl leading-tight gap-x-4">
        <img src={img2} alt="art2" className="inline-block rounded-md align-middle w-16 h-10 object-cover" />
        <span>PEOPLE</span>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-4xl md:text-6xl leading-tight gap-x-4 gap-y-2">
  <span>SEEK ADVICE FROM AI</span>
  <img
    src={img3}
    alt="art3"
    className="inline-block rounded-md align-middle w-24 h-10 object-cover"
  />
</div>
    </div>
    <div className="mt-8 text-gray-700 text-center text-sm max-w-3xl">
      The Ancients used the Oracle so as not to have to think of solutions themselves, and the modern population is using AI so they don't have to think for themselves<br/>
      And so, we see Pythia turned into PythAI, giving advice to another unquestioning generation
    </div>
  </section>
);

export default ImageMessageSection; 