import { Cookie, Files, Info, Link, Lock, Repeat, Shield, User } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="py-4 px-8 mx-auto max-w-7xl">
      <div className="mx-auto my-8 p-8">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Effective Date:{" "}
          <span className="font-medium">20th December 2023</span>
        </p>
        <p>
          Thank you for using <span className="font-medium">Flashvert</span> .
          This Privacy Policy outlines our commitment to your privacy and
          explains how we collect, use, and protect your information when you
          use our website.
        </p>
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="p-[5px] bg-purple-100 mr-2 mb-1 rounded-sm"><Info /></span> 1. Information We Collect 
          </h2>
          <div className="ml-4">
            <h3 className="text-lg font-semibold mb-2">
              1.1. User-Provided Information
            </h3>
            <p>
              We do not require users to create accounts or provide personal
              information to use our service. We do not collect any personally
              identifiable information such as names, email addresses, or any
              other personal details.
            </p>
          </div>
          <div className="ml-4 mt-4">
            <h3 className="text-lg font-semibold mb-2">
              1.2. Automatically Collected Information
            </h3>
            <p>
              We may collect non-personal information automatically, such as
              your IP address, browser type, device information, and access
              times. This information is used solely for the purpose of
              improving the performance and functionality of our service.
            </p>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="p-[5px] bg-green-100 mr-2 mb-1 rounded-sm"><User /></span>2. User Information  
          </h2>
          <p>
            We do not store, process, or use any personal information as part of
            our service. The files you upload for conversion are processed
            on-the-fly, and we do not retain them on our servers after the
            conversion process is complete.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="p-[5px] bg-yellow-100 mr-2 mb-1 rounded-sm"><Cookie /></span> 3. Cookies  
          </h2>
          <p>
            We do not use cookies for tracking or identifying users. However,
            third-party services we utilize for analytics or other
            functionalities may use cookies; please refer to their respective
            privacy policies for more information.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="p-[5px] bg-blue-100 mr-2 mb-1 rounded-sm"><Link /></span>  4. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. Please be
            aware that we are not responsible for the privacy practices of these
            sites. We encourage our users to be aware when they leave our site
            and to read the privacy statements of each website that collects
            personally identifiable information.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="p-[5px] bg-stone-100 mr-2 mb-1 rounded-sm"><Lock /></span>  5. Security
          </h2>
          <p>
            We take reasonable measures to protect the information you provide
            to us. Since we do not store files, there is no data retention on
            our servers after the conversion process is complete.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="p-[5px] bg-lime-100 mr-2 mb-1 rounded-sm"><Repeat /></span> 6. Changes to this Privacy Policy
          </h2>
          <p>
            We reserve the right to update this Privacy Policy at any time.
            Changes will be effective immediately upon posting. We encourage you
            to review this Privacy Policy periodically for any changes.
          </p>
        </section>
      </div>
    </div>
  );
}
