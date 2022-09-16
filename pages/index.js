import Body from "../components/Body";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="d-flex">
      {/* side bar... */}
      <SideBar />
      {/* Body... */}
      <Body />
    </div>
  )
}
