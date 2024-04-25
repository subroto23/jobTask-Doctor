import { Link, NavLink } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import Button from "../../utlis/Button/Button";
import WithoutBacgroundButton from "../../utlis/Button/WithoutBacgroundButton";
import NavLinks, { NavLinksStyles } from "./NavLinks";

const Navbar = () => {
  return (
    <div className=" bg-skin-navbar text-skin-primary min-h-[94px] sticky top-0  z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn lg:hidden">
              <FaAlignJustify />
            </div>
            {/*For Small Device */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-skin-navbar rounded-box w-44"
            >
              <NavLinks />
              <li>
                <NavLink to="/login" className={NavLinksStyles}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/sign-up" className={NavLinksStyles}>
                  Sign-up
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Companey Logo */}
          <Link
            to="/"
            className="text-sm font-semibold uppercase tracking-[8px] md:ml-0 ml-2"
          >
            AMRUTAM
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-4 px-1">
            <NavLinks />
          </ul>
        </div>
        {/* SignUp and Login Button */}
        <div className="navbar-end ">
          <div className="md:block hidden space-x-6">
            <Link to="/login">
              <WithoutBacgroundButton props={"LogIn"} />
            </Link>
            <Link to="sign-up">
              <Button props={"Sign-up"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
