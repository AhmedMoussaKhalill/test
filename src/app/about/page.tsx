import { Button } from "@/components/ui/button";
import { Globe2, Palette, TabletSmartphone, Zap } from "lucide-react";
import Link from "next/link";

export default async function About() {
  return (
    <>
      <div className="py-4 px-8 mx-auto max-w-7xl">
        {/* About Section */}
        <div className="mx-auto my-8 p-8">
          <h1 className="text-3xl font-bold mb-6">About Flashvert</h1>

          <p className="text-gray-700 mb-6">
            Welcome to Flashvert, where speed meets versatility in the world of
            digital file conversion. We take pride in providing you with the
            fastest and most efficient audio, video, and image conversion
            services on the web. Our mission is to empower users with a seamless
            and swift experience, allowing you to convert your media files
            effortlessly.
          </p>

          {/* Commitment to Speed and Efficiency */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Our Commitment to Speed and Efficiency
            </h2>
            <p className="text-gray-700 mb-4">
              At Flashvert, we understand the importance of time in today's
              fast-paced digital landscape. That's why we've dedicated ourselves
              to developing cutting-edge technology that accelerates the
              conversion process without compromising quality.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Lightning-Fast Conversion */}
              <div className="p-4 bg-blue-100 rounded-lg">
                <Zap className="mb-2" />
                <h3 className="text-xl font-semibold mb-2">
                  Lightning-Fast Conversion
                </h3>
                <p className="text-gray-700">
                  Experience the speed of technology at its finest. Our platform
                  is designed to deliver rapid conversion without sacrificing
                  the integrity of your files.
                </p>
              </div>

              {/* Versatile File Compatibility */}
              <div className="p-4 bg-green-100 rounded-lg">
                <Globe2 className="mb-2" />
                <h3 className="text-xl font-semibold mb-2">
                  Versatile File Compatibility
                </h3>
                <p className="text-gray-700">
                  No matter the format, we've got you covered. Flashvert
                  supports a wide range of audio, video, and image formats,
                  ensuring that you can convert your files seamlessly.
                </p>
              </div>

              {/* Intuitive User Interface */}
              <div className="p-4 bg-yellow-100 rounded-lg">
                <Palette className="mb-2" />
                <h3 className="text-xl font-semibold mb-2">
                  Intuitive User Interface
                </h3>
                <p className="text-gray-700">
                  Simplicity meets sophistication. Our user-friendly interface
                  makes the conversion process a breeze, allowing you to achieve
                  your desired results with just a few clicks.
                </p>
              </div>
              {/* Mobile Accessibility */}
              <div className="p-4 bg-purple-100 rounded-lg">
                <TabletSmartphone className="mb-2" />
                <h3 className="text-xl font-semibold mb-2">
                  Mobile Accessibility
                </h3>
                <p className="text-gray-700">
                  Access Flashvert on the go! Our platform is optimized for
                  mobile devices, ensuring that you can convert your files
                  anytime, anywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Flashvert?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                Unmatched Speed: Our commitment to speed sets us apart from the
                rest. Experience conversion like never before.
              </li>
              <li className="mb-2">
                Quality Assurance: Fast doesn't mean compromising on quality.
                Flashvert guarantees top-notch results every time.
              </li>
              <li className="mb-2">
                Free and Unlimited: Flashvert is free to use and offers
                unlimited conversions. Enjoy the benefits without any
                restrictions.
              </li>
              <li className="mb-2">
                Privacy and Security: Your files are precious, and so is your
                privacy. We prioritize the security of your data throughout the
                conversion process.
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="mb-8">
            <p className="text-gray-700">
              Flashvert is more than just a conversion platform; it's a
              community. Connect with us on social media, share your
              experiences, and stay updated on the latest advancements in
              digital file conversion.
            </p>
          </div>
          <Link href="/" className=" justify-center flex mt-10">
            <Button size="lg" className="font-semibold">
              Start Converting Now
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
