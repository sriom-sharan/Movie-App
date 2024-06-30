import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const TopNav = () => {
  const auth = getAuth();
  const [data, setData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setData(user);
        // ...
      } else {
        console.log("Error");
      }
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  console.log(data);
  const [showData, setShowData] = useState(false);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        setData(null);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="w-full  h-16 absolute right-0 z-[1000] flex  first-letter: items-center justify-center">
      <div className="flex-1 gap-2 flex justify-end pr-6 max-[600px]:pr-2 h-full  items-center">
        <Link to={"/search"}>
          <i
            className="ri-search-line text-2xl px-4 -ml-1 py-1.5 text-zinc-200"
            aria-label="Search Icon"
          ></i>
        </Link>
        {data ? (
          // <i className="ri-user-line text-2xl text-white mr-10 font-thin"></i>
          <div>
            {data.photoURL ? (
              <img
                onClick={() => setShowData((prev) => !prev)}
                className="w-9 h-9 rounded-full border-2 mr-4 cursor-pointer border-zinc-500"
                src={data.photoURL}
              />
            ) : (
              <h1 className="w-9 h-9 rounded-full text-center flex justify-center text-xl border-2 mr-4 bg-red-700 cursor-pointer text-neutral-50 border-zinc-500">
                {data.email.charAt(0).toUpperCase()}
              </h1>
            )}

            {showData && (
              <div className="absolute rounded-xl top-16 w-60 flex gap-1 flex-col items-center p-4 justify-center bg-white right-10">
                <p
                  onClick={() => setShowData(false)}
                  className="ml-auto cursor-pointer rotate-45"
                >
                  <i className="ri-add-line "></i>
                </p>
                {data.photoURL ? (
                  <img
                    className="w-16 h-16  rounded-full border-2 border-zinc-500"
                    src={data.photoURL}
                  />
                ) : (
                  <h1 className="w-16 h-16 rounded-full text-center flex justify-center text-5xl border-2  bg-red-700 cursor-pointer text-neutral-50 border-zinc-500">
                    {data.email.charAt(0).toUpperCase()}
                  </h1>
                )}
                <h1 className="font-poppins text-lg">{data.displayName}</h1>
                <h1 className="text-sm">{data.email}</h1>
                <button
                  onClick={handleSignOut}
                  className="border-[1px] my-2 rounded-md border-purple-700 font-medium text-purple-900 px-2 py-1 text-sm"
                >
                  {" "}
                  <i className="ri-login-box-line mr-1"></i>Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to={"/auth"}>
            <button className="text-white max-[600px]:mr-2 border-2 border-primary bg-purple-500/20 hover:bg-purple-500/70 duration-20000 mr-10 px-4 rounded-lg text-sm py-2">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopNav;
