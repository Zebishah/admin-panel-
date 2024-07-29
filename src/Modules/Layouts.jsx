import { Outlet } from "react-router";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex w-full ">
        <div className="flex md:w-[15%]">
          <SideBar />
          <div>{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
}
