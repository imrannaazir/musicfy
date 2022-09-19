import styles from "../styles/Home.module.css"
import { options } from "../lib/rapid"
import { useEffect, useState } from "react"
import Image from "next/image"
const Albums = () => {
    const [albums, setAlbums] = useState([])
    // fetch data from rapid api...
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://shazam.p.rapidapi.com/search?term=hello', options)
                const data = await response.json()
                console.log(data.tracks.hits);
                setAlbums(data?.tracks?.hits)
            }
            //if error... 
            catch (err) {
                console.log(err);
            }
        }
        //invoked async func
        fetchData()
    }, [])
    return (
        <div>
            {/* type */}
            <div className="d-flex  align-items-center gap-1">
                <p>Released this week</p>
                <div className={`${styles.horizontal} `}></div>
                <p>Released this week</p>
            </div>
            {/* albums */}
            <div className="d-flex">
                {
                    albums.map(album => {
                        return (
                            <div key={album?.track.key}>
                                <Image
                                    loader={() => album?.track.images.background}
                                    src={album?.track.images.background}
                                    width={200}
                                    height={200}
                                    alt=""
                                />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Albums;