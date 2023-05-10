//

function VideoCard() {
  return (
    <section className="text-gray-900 inline-block videoCard ">
      <div className="rounded-lg border-2 border-solid border-gray-700 ">
        {/* <div className="h-56 border-b-[3px] border-solid border-gray-700">
          Video
        </div> */}
        <iframe
          className="rounded-t-lg"
          height="240"
          width="370"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <div className="text-center text-gray-500  mt-4 ">
          <p>Kalamkari Wedding Invitation</p>
          <p>Fusion of Art & Music </p>
          <p>Include All Family Names </p>
          <p>Tree of Life-Indian Theme </p>
          <p>Add any Function-Sagan, Mehndi etc.</p>
        </div>
        <a
          href="/videoDetails"
          className="rounded-lg border-2 block border-solid border-red-300 text-center mx-4 my-6"
        >
          <button className="px-2 py-2">Details</button>
        </a>
      </div>
    </section>
  );
}
export default VideoCard;
