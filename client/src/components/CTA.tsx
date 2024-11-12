export default function CTA() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight bg-gradient-to-r from-gray-700 to-gray-50 bg-clip-text text-transparent">
          Erase Backgrounds Instantly
        </h2>
        <p className="mb-6 font-light text-gray-300 md:text-lg">
          100% free, forever.
        </p>
        <div className="mb-24">
          <input type="file" name="" id="upload-image2" hidden />
          <label
            htmlFor="upload-image2"
            className="cursor-pointer bg-black border border-gray-800 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-full hover:bg-gray-900 active:bg-gray-900 hover:scale-105 transform duration-500"
          >
            Upload your image
            <svg
              className="w-5 h-5 ml-2 -mr-1 -rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}
