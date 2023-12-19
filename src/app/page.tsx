import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="my-20">
      <div className="mx-auto mb-10 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-black">
          Flashvert is now public!
        </p>
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-center">
          Limitless <span className="text-blue-600">File Conversion</span>{" "}
          Freedom
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-28 xl:px-[20rem] 2xl:px-56 px-5">
          Unlock your creativity with Flashvert—the fastest online tool for free
          multimedia conversion. Transform images, audio, and videos
          effortlessly. No restrictions, just pure creative freedom. Start
          converting now and elevate your content like never before!
        </p>
      </div>
      <div className="md:px-32 px-8 mx-auto mt-10 max-w-7xl">
        <Dropzone />
      </div>
    </div>
  );
}
