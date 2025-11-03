import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const videos = [
  "https://cdn.dribbble.com/userupload/44360845/file/4988e26dadf995df34b5bfde3d04d45d.mp4",
  "https://cdn.dribbble.com/userupload/44953456/file/76723a83e127562547a28df5001d257b.webm",
  "https://cdn.dribbble.com/userupload/16569515/file/original-d99071d642c8efd87400222a0c344e1a.mp4",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto change every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + videos.length) % videos.length);
  const nextSlide = () => setCurrent((current + 1) % videos.length);

  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="max-w-7xl w-full overflow-hidden bg-black rounded-2xl shadow-2xl">
        {/* Video Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {videos.map((src, i) => (
            <div key={i} className="w-full shrink-0">
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[60vh] object-cover brightness-90"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-6 mt-4">
        <button
          onClick={prevSlide}
          className="bg-pink-500 hover:bg-green-500 text-white p-3 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-pink-500 hover:bg-green-500 text-white p-3 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-4">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === i ? "bg-white w-4" : "bg-purple-500"
            }`}
          />
        ))}
      </div>

      <div className="mb-10"></div>
    </div>
  );
};

export default Banner;
