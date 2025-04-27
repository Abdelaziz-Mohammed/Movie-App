import Card from './Card';
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

function HorizontalSlider({ headingTitle, sliderData, media_type, isTrending = false }) {
  const containerRef = useRef(null);
  const handlePrev = () => {
    containerRef.current.scrollLeft -= 254;
  }
  const handleNext = () => {
    containerRef.current.scrollLeft += 254;
  }
  return (
    <section className="container mx-auto px-4 my-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4">
        {headingTitle}
      </h2>
      <div className="relative">
        <div ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll
          scrollbar-none relative z-10 scroll-smooth transition-all">
          {
            sliderData.map((data, index) =>
              <Card key={data.id} data={data} media_type={media_type} isTrending={isTrending} index={index+1} />
            )
          }
        </div>
        {/* prev & next btns */}
        <div className="absolute top-0 hidden md:flex items-center justify-between w-full h-full">
          <button onClick={handlePrev}
            className="bg-white opacity-35 hover:opacity-75 transition-all duration-300 
          text-black rounded-full w-7 h-7 flex items-center justify-center -translate-x-1/2 z-20">
            <FaAngleLeft />
          </button>
          <button onClick={handleNext}
            className="bg-white opacity-35 hover:opacity-75 transition-all duration-300 
          text-black rounded-full w-7 h-7 flex items-center justify-center translate-x-1/2 z-20">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HorizontalSlider