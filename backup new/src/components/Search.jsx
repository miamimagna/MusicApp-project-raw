import { useRef } from "react";

export const Search = ({ fn }) => {
  const artist = useRef();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fn(artist.current.value);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-11">
          <input
            ref={artist}
            type="search"
            className="form-control me-2"
            placeholder="Search any song"
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="col-1">
          <button
            className="btn rounded custom"
            onClick={() => {
              fn(artist.current.value);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
