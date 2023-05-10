import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import VideoCard from "@/components/VideoCard";
import NavBar from "@/components/NavBar";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <NavBar />

        <div className="py-10 bg-white min-h-screen ">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 ">
                Wedding Invitation Videos
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0 flex justify-between flex-wrap items-start ">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
