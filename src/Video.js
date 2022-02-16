import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);
  const handleVideoPress = () => {
    // if video is playing stop it

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    // otherwise if its not playing
    // play it...
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}
//player.vimeo.com/external/638803187.sd.mp4?s=c82aa6f7e334c5088ae9812a0811fd894fd4107e&profile_id=165&oauth2_token_id=57447761
export default Video;
