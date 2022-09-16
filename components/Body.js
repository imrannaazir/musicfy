import { options } from "../lib/rapid";
import Albums from "./Albums";
import Banner from "./Banner";

const Body = () => {
    // fetch data from rapid api...
    async function fetchData() {
        try {
            const response = await fetch('https://shazam.p.rapidapi.com/search?term=hello', options)
            const data = await response.json()
            console.log(data);
        }
        //if error... 
        catch (err) {
            console.log(err);
        }
    }
    //invoked async func
    fetchData()

    return (
        <div className="w-100">
            {/* banner is here... */}
            <Banner />
            {/* playlist... */}
            <Albums />
        </div>
    );
}

export default Body;