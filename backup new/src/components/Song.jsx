export const Song = ({ song, fun }) => {
  const showPlayer = () => {
    fun(true, song);
  };
  return (
    <div className="row brd">
      <div className="col-2">
        <img className="rounded" src={song.artworkUrl100} alt="song" />
      </div>
      <div className="col-8 text-center">
        <h3>{song.trackName}</h3>
        <h5 className="fst-italic">{song.artistName}</h5>
      </div>
      <div className="col-2 text-center">
        <button onClick={showPlayer} className="btn rounded custom">
          Play Song
        </button>
      </div>
    </div>
  );
};
