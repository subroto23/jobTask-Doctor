import { NavLink } from "react-router-dom";

type TStatus = {
  isActive: boolean;
  isPending: boolean;
};

export const NavLinksStyles = ({ isActive, isPending }: TStatus) =>
  isPending ? "font-bold" : isActive ? "font-bold" : "";

const NavLinks = () => {
  return (
    <>
      <li className="hover:font-bold text-skin-primary">
        <NavLink to="/" className={NavLinksStyles}>
          Home
        </NavLink>
      </li>
      <li className="hover:font-bold text-skin-primary">
        <NavLink to="/find-doctors" className={NavLinksStyles}>
          Find Doctors
        </NavLink>
      </li>
      <li className="hover:font-bold text-skin-primary">
        <NavLink to="/about-us" className={NavLinksStyles}>
          About Us
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
