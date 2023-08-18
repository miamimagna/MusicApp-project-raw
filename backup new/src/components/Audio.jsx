import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export const Aud = ({ song }) => {
  console.log(song.previewUrl);
  return (
    <AudioPlayer
      autoPlay
      className="player"
      src={song.previewUrl}
      // other props here
    />
  );
};
