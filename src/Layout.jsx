// Layout.js

import Header from "./utils/Header";
import Footer from "./utils/Footer";

import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
