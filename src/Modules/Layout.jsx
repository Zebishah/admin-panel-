import Navbar from "./Navbar";
import SideBar from "./SideBar";
import PropTypes from "prop-types";
const Layout = () => {
  return (
    <div className="flex">
      <SideBar />

      <Navbar />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
