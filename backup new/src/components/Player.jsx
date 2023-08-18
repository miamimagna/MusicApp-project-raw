import { Aud } from "./Audio";
import "../stylesheets/player.css";

export const Player = ({ song, fun }) => {
  const back = () => {
    fun(false, null);
  };
  return (
    <>
      <button onClick={back} className="btn rounded custom-fill">
        Back to Songs
      </button>
      <div
        class="card rounded mx-auto grad"
        style={{ width: "400px", height: "550px" }}
      >
        <img
          src={song.artworkUrl100}
          height="200%"
          width="200%"
          class="card-img-top"
          alt="song"
        />
        <div class="card-body">
          <h5 class="card-title">{song?.trackName}</h5>
          <p class="card-text fst-italic">{song?.artistName}</p>
        </div>
        <Aud song={song} />
      </div>
    </>
  );
};
