import { Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PiTextAlignRightBold } from "react-icons/pi";
import Link from "next/link";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <nav className=" sticky backdrop-blur-md bg-opacity-30 inset-x-0 top-0 bg-white dark:bg-gray-950 z-50 h-fit border-zinc-200">
        <div className="flex items-center h-full gap-2 px-8 mx-auto border-b py-4 justify-between max-w-7xl">
          <Link href="/" className="items-center gap-2 sm:flex">
            <p
              className="flex gap-2 text-2xl font-semibold text-gray-900 dark:text-white items-center"
              id="logo"
            >
              <Zap className="w-9 h-9 text-blue-600" /> Flashvert.
            </p>
          </Link>
          <div className="items-center gap-2 hidden md:flex">
            <Link href="/" className="mr-3 font-semibold transform transition-transform duration-300 hover:translate-y-[-4px]">
              Home
            </Link>
            <Link href="/about" className="mr-3 font-semibold transform transition-transform duration-300 hover:translate-y-[-4px]">
              About
            </Link>
            <Link href="/privacypolicy" className="mr-3 font-semibold transform transition-transform duration-300 hover:translate-y-[-4px]">
              Privacy Policy
            </Link>
            <Button className=" ml-3 bg-blue-600">
              <span className="mr-2 font-semibold">Github Repo</span>{" "}
              <FaGithub color="white" fontSize="1.4em" className="mb-1" />
            </Button>
          </div>
          {/* Mobile NavBar */}
          <Dialog>
            <DialogTrigger asChild className="md:hidden cursor-pointer">
              <PiTextAlignRightBold fontSize="1.7rem" />
            </DialogTrigger>
            <DialogContent>
              <div>
                <div className="items-center gap-5 flex flex-col">
                  <Link href="/" className="mr-3 font-semibold">
                    Home
                  </Link>
                  <Link href="/about" className="mr-3 font-semibold">
                    About
                  </Link>
                  <Link href="/privacypolicy" className="mr-3 font-semibold">
                    Privacy Policy
                  </Link>
                  <Button className="bg-blue-600 mt-2">
                    <span className="mr-2 font-semibold">Github Repo</span>{" "}
                    <FaGithub color="white" fontSize="1.4em" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
