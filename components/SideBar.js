import styles from '../styles/Home.module.css'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { BsPlayCircle } from 'react-icons/bs';
const SideBar = () => {
    return (
        <aside className={`vh-100 ${styles.sidebar} text-white-50`}>
            <div className='d-flex align-items-center gap-2 p-3'>
                <AiFillHome />
                <span>Home</span>
            </div>
            <div className='d-flex align-items-center gap-2 p-3'>
                <AiOutlineSearch />
                <span>Search</span>
            </div>
            <div className='d-flex align-items-center gap-2 p-3'>
                <MdFavorite />
                <span>Favorites</span>
            </div>
            <div className='d-flex align-items-center gap-2 p-3'>
                <BsPlayCircle />
                <span>Playlists</span>
            </div>
        </aside>
    );
}

export default SideBar;