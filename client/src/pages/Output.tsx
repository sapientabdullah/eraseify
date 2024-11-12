export default function Output() {
  return (
    <div className="text-white mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh] ">
      <div className="rounded-lg px-8 py-6 drop-shadow-sm border border-gray-800">
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          <div>
            <p className="font-semibold mb-2">Original</p>
            <img
              className="rounded-md border"
              src="/withBackground.jpg"
              alt="Original image"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold mb-2">Background Removed</p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden">
              {/* <img
                src="/withoutBackground.png"
                alt="Image with the background removed"
                className="rounded-md"
              /> */}
              <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
                <div className="border-4 border-gray-800 rounded-full h-14 w-14 border-t-transparent animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center sm:justify-end flex-wrap gap-4 mt-6">
          <button className="bg-black text-white rounded-full flex items-center justify-center px-4 py-2 border border-gray-800 transition-all transform duration-500 hover:scale-105 hover:bg-gray-900 active:bg-gray-900 focus:ring-4 focus:ring-gray-900">
            <span>Upload another image</span>
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
          </button>
          <a
            href=""
            className="bg-gradient-to-r from-black to-gray-600 text-white rounded-full flex items-center justify-center px-4 py-2 border border-gray-800 transition-all transform duration-500 hover:scale-105 hover:bg-gray-900 active:bg-gray-900 focus:ring-4 focus:ring-gray-900"
          >
            Download image
            <svg
              className="w-5 h-5 ml-2 -mr-1 rotate-90"
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
          </a>
        </div>
      </div>
    </div>
  );
}
