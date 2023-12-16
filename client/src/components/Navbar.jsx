/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex items-center justify-between px-16 lg:px-[175px] py-4 bg-black">
      <h1 className="text-md md:text-2xl lg:text-xl font-bold lg:font-extrabold  text-white">
        <Link to="/">The Articles</Link>
      </h1>
      <div className="flex items-center space-x-0 bg-slate-100 p-2 md:px-3 md:py-2 border rounded-lg">
        <input
          onChange={(e) => setPrompt(e.target.value)}
          className="outline-none bg-transparent"
          placeholder="Search a post"
          type="text"
        />
        <p
          onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))}
          className="cursor-pointer"
        >
          <BsSearch />
        </p>
      </div>
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4 text-white">
        {user ? (
          <h3 className="border-white border-2 p-1 rounded-md">
            <Link to={"/write"}>Create Post + </Link>
          </h3>
        ) : (
          <h3>
            <Link to={"/login"}>Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu} className="text-lg text-white cursor-pointer">
            <p>
              <FaBars />
              {menu && <Menu />}
            </p>
          </div>
        ) : (
          <h3>
            <Link to={"/register"}>Register</Link>
          </h3>
        )}
      </div>
      <div
        onClick={showMenu}
        className="md:hidden lg:hidden text-lg text-white cursor-pointer"
      >
        <p>
          <FaBars />
          {menu && <Menu />}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
