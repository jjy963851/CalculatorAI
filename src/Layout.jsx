// Layout.js

import Header from "./utils/Header";
import Footer from "./utils/Footer";

import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
