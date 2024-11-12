import { useState } from "react";

export default function Slider() {
  const [position, setPosition] = useState(50);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };
  return (
    <div className="pb-10 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-700 to-gray-50 bg-clip-text text-transparent">
        See the Difference
      </h1>
      <div className="relative w-full max-w-3xl overflow-hidden m-auto">
        <img
          src="/withBackground.jpg"
          style={{ clipPath: `inset(0 ${100.2 - position}% 0 0)` }}
          alt=""
          className="rounded-2xl"
        />
        <img
          src="/withoutBackground.png"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          className="absolute top-0 left-0 rounded-2xl"
        />
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={handleChange}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
        />
      </div>
    </div>
  );
}
