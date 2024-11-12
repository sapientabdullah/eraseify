export default function Hero() {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="bg-gradient-to-r from-gray-400 to-gray-50 bg-clip-text text-transparent max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl">
          Eraseify
        </h1>
        <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-xl lg:text-xl text-gray-300">
          Instantly remove backgrounds from images with just one click.
        </p>
        <div>
          <input type="file" name="" id="upload-image" hidden />
          <label
            htmlFor="upload-image"
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
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="https://i.ytimg.com/vi/teOD-lqddT0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBTgTd8xk1X4lLJWk6Ef3yTdKxGxw"
          alt="mockup"
          className="rounded-2xl shadow-2xl shadow-gray-800"
        />
      </div>
    </div>
  );
}
