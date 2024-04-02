// The Header component is responsible for rendering the application's header, which includes the Netflix logo
// and the user's display name and profile picture if they are signed in.
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  // useSelector is a hook from the react-redux library that allows us to access the Redux store's state.
  const user = useSelector((store) => store.user);
  console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // Navigate to the root URL ("/") when the sign-out is successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        <Error />;
      });
  };
  return (
    <div className="absolute w-screen z-10 bg-gradient-to-b from-black flex justify-between">
      <img
        className="mx-12 w-48 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="NETFLIX_LOGO"
      />
      {/* // Only render the following elements if the user is signed in. */}
      {user !== null && (
        <div className="flex">
          <div>
            <img
              className="w-12 h-12 mt-4 rounded-full"
              src={user?.photoURL}
              alt="netflix logo"
            />
            <h3 className="font-bold">{user?.displayName}</h3>
          </div>

          {/* // Handle user sign-out */}
          <button
            className="font-bold text-red-600 mr-3"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
