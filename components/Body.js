import Albums from "./Albums";
import Banner from "./Banner";

const Body = () => {
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