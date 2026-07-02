import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Nav from "./Nav";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function Root() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
    </>
  );
}
