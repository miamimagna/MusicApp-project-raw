import { Player } from "../components/Player";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-clients";
import { useEffect, useState } from "react";
import '../stylesheets/gradient.css'

export const SearchPage=()=>{
    const [allSongs, setSongs] =useState([]);
    // Component Life Cycle
    const [flag, setFlag] = useState(false);
    const [song, setSong]=useState(null);

    const loadSongs=async ()=>{
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect(()=>{
        loadSongs();
    },[])
    const togglePlayer= (flag, songarg) => {
        setSong(songarg);
        setFlag(flag);
    }

    const getArtistName=async (artistName)=>{
        setSongs(await getSongs(artistName));
    }

    const jsx = <><Search fn={getArtistName}/> <br/>
    <Songs allsongs={allSongs} fun={togglePlayer}/></>;
    return(
    <div>
        <nav className="navbar bg-body-tertiary gradient-custom">
            <div className="container-fluid head">
                <a className="navbar-brand" href="https://miamimagna.github.io/musicApp">
                <img src="https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png" alt="Logo" width="40" height="30" className="d-inline-block align-text-top"/>
                MusicApp</a>
            </div>
        </nav>
        <div className="container-fluid custom-bg">
            {flag?<Player song={song} fun={togglePlayer}/>:jsx}
        </div>
        
    </div>
    );
}

/*
<nav className="navbar bg-body-tertiary gradient-custom">
    <div className="container-fluid">
    <a className="navbar-brand" href="https://miamimagna.github.io/musicApp">
    <img src="https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png" alt="Logo" width="40" height="30" className="d-inline-block align-text-top">
    MusicApp</a>
    <form className="d-flex w-75" role="search">
    <input type="Search" className="form-control me-2 " placeholder="Search any song" aria-label="Search">
    <button className="btn rounded custom">
    Search</button>
</form>
</div>
</nav>
*/