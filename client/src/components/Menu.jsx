import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../url";

const Menu = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(res);
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-gray-500 w-[200px] flex flex-col items-start absolute top-12 right-6 rounded-md p-4 space-y-2">
      {!user && (
        <h3 className="text-white md:text-lg lg:text-lg hover:text-white cursor-pointer">
          <Link to={"/login"}>Login</Link>
        </h3>
      )}
      {!user && (
        <h3 className="text-white md:text-lg lg:text-lg hover:text-white cursor-pointer">
          <Link to={"/register"}>Register</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white md:text-lg lg:text-lg hover:text-white cursor-pointer">
          <Link to={"/write"}>Create Post</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white md:text-lg lg:text-lg hover:text-white cursor-pointer">
          <Link to={"/profile/" + user._id}>Profile</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white md:text-lg lg:text-lg hover:text-white cursor-pointer">
          <Link to={"/myblogs/" + user._id}>My Blogs</Link>
        </h3>
      )}
      {user && (
        <h3
          onClick={handleLogout}
          className="text-white md:text-lg lg:text-lg hover:text-white cursor-pointer"
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
