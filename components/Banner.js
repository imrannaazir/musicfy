import Image from "next/image";
import styles from "../styles/Home.module.css"
import img from "../public/musicfy-banner.png"
import { FaSun, FaMoon } from "react-icons/fa"
const Banner = () => {
    return (
        <div className={`flex-grow-1 h-25 ${styles.banner}`}>
            <div className="d-flex justify-content-between align-items-center text-light">

                <Image
                    className=""
                    // loader={myLoader}
                    src={img}
                    alt="Picture of the author"
                    height="160%"

                />
                {/* heading of banner... */}
                <div className="d-flex flex-column align-items-end pe-5">
                    <h1>Your favorite tunes</h1>
                    <div className="fs-3">All <FaSun className="text-danger" /> and all <FaMoon className="text-dark" /></div>
                </div>
            </div>
        </div>
    );
}

export default Banner;