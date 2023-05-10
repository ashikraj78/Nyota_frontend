import NavBar from "@/components/NavBar";
import { BiTime } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { GiChessRook } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import VideoCard from "@/components/VideoCard";
import { useState } from "react";
import { Modal } from "antd";
import DetailsForm from "@/components/DetailsForm";

//
function VideoDetails() {
  const [detailsForm, setDetailsForm] = useState(false);
  return (
    <section>
      <NavBar />
      <div className="py-10 bg-white min-h-screen ">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 ">
              Kalamkari Wedding Invitation Video
            </h1>
          </div>
        </header>
        <main className="text-gray-900">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
            <p className="text-center text-red-400 my-4">
              Announce your WEDDING with a dash of ROMANCE
            </p>
            <div className="flex justify-between my-16">
              <div className="text-center ">
                <BiTime size={64} className="inline-block" />
                <p className="mt-8 mb-2 text-gray-500">Duration</p>
                <p className="text-3xl text-gray-600">111 sec</p>
              </div>
              <div className="text-center ">
                <BsHeartFill size={64} className="inline-block" fill="red" />
                <p className="mt-8 mb-2 text-gray-500">Art Inspired</p>
                <p className="text-3xl text-gray-600">Indian</p>
              </div>
              <div className="text-center ">
                <GiChessRook size={64} className="inline-block" fill="pink" />
                <p className="mt-8 mb-2 text-gray-500">Theme</p>
                <p className="text-3xl text-gray-600">Royal</p>
              </div>
              <div className="text-center ">
                <FaMusic size={64} className="inline-block" fill="orange" />
                <p className="mt-8 mb-2 text-gray-500">Music</p>
                <p className="text-3xl text-gray-600">Mantra Chants</p>
              </div>
            </div>
            <div className="flex justify-between">
              <iframe
                className="w-4/6 rounded-3xl"
                height="360"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
              <div className="ml-8 flex flex-col justify-around">
                <p className="text-3xl text-gray-600">₹ 5,000</p>
                <ul>
                  <li>
                    Designer wedding invitation video with a modern take on The
                    Tree of Life created in Kalamkari.
                  </li>
                  <li>
                    Hand illustrated elements, including animated florals &
                    peacocks, carry forward the traditional theme of the
                    marriage e-invite.
                  </li>
                  <li>
                    This e-card can be customised with or without photos, with
                    your favourite music and comes optimised for sharing on
                  </li>
                </ul>
                {!detailsForm && (
                  <div
                    className="bg-lime-600 rounded-3xl py-4 text-gray-100 text-center cursor-pointer"
                    onClick={() => setDetailsForm(true)}
                  >
                    <button>Buy Now</button>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-12">
              <p className="py-8 text-2xl text-gray-600">
                You may also like ...
              </p>
              <div className="flex justify-between">
                <VideoCard />
                <VideoCard />
                <VideoCard />
              </div>
            </div>
          </div>
        </main>
        <DetailsForm
          detailsForm={detailsForm}
          setDetailsForm={setDetailsForm}
        />
      </div>
    </section>
  );
}
export default VideoDetails;
