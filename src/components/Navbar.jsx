 import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="lg:flex justify-between px-10 items-center shadow-lg p-3 ">
        <img  src="https://i.ibb.co/PDVbK1Z/Logo.png" alt="" />

        <div>
          <ul className="flex gap-10">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-pink-500 underline" : ""
              }
            >
              statistics
            </NavLink>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
