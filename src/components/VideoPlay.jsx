import { IoClose } from "react-icons/io5"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

function VideoPlay({close}) {
  const params = useParams();
  const {data} = useFetch(`/${params?.explore}/${params?.id}/videos`);
  const videoData = data?.results || [];
  const video = videoData[0];
  const videoFrame = useRef(null);
  // disable scroll when video is playing and enable it back when closing
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  // close video when clicking outside frame
  useEffect(() => {
    const handleClickOutsideFrame = (e) => {
      if (videoFrame.current && !videoFrame.current.contains(e.target)) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClickOutsideFrame);
    return () => document.removeEventListener('mousedown', handleClickOutsideFrame);
  }, [close]);

  return (
    <section className="fixed top-1/2 -translate-y-1/2 right-0 left-0 z-50 mt-4 px-4 flex items-center justify-center
      w-screen h-screen bg-white/10 backdrop-blur-sm">
      <div ref={videoFrame}
        className="bg-black w-full max-w-screen-lg max-h-[80vh] aspect-video rounded-md relative">
        <button onClick={close}
          className="absolute -top-3 -right-2 text-xl text-white bg-red-600 rounded-full w-6 h-6
          flex items-center justify-center hover:bg-red-500">
          <IoClose />
        </button>
        {
          videoData.length > 0 ?
          <iframe
            src={`https://www.youtube.com/embed/${video?.key}`}
            className="w-full h-full"
            allowFullScreen
          /> :
          <div className="w-full h-full flex items-center justify-center bg-white/25 rounded-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4 text-center">
              🙄
              <br />
              No Video Found !!
            </h2>
          </div>
        }
      </div>
    </section>
  )
}

export default VideoPlay