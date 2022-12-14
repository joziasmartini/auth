import { LockKey } from "phosphor-react";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    console.log(`Logging in: ${username} ${password}`);
    await axios
      .post("http://localhost:5000/login", {
        headers: {
          Authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
        },
      })
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "tokenExpiration",
          JSON.parse(window.atob(res.data.token.split(".")[1])).exp
        );

        console.log("Token: " + localStorage.getItem("token"));
        console.log(
          "Token Expiration: " + localStorage.getItem("tokenExpiration")
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getUser = () => {
    const accessToken = "Bearer " + localStorage.getItem("token");
    axios
      .get("http://api.github.com/user", {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="font-ibm h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container py-6 px-24 h-full mx-auto">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 p-8 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <div className="grid place-content-center my-6">
                        <LockKey size={58} color="#0f766e" />
                      </div>
                      {/* <h4 className="text-4xl font-bold mt-6 mb-6 pb-1">
                        Auth
                      </h4> */}
                    </div>
                    <form>
                      <p className="mb-4 text-center">
                        Please login to your account
                      </p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-6 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-6 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-none"
                          id="exampleFormControlInput2"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-center pt-1 mb-6 pb-1">
                        <button
                          className="inline-block px-6 py-4 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-sky-700 to-emerald-700"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          onClick={() => login()}
                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">
                          recover account
                        </a>
                        <span> or </span>
                        <a className="text-gray-500" href="#!">
                          create account
                        </a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        {/* <p className="mb-0 mr-2">Don't have an account?</p> */}
                        {/* <button
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Danger
                        </button> */}
                      </div>
                    </form>
                  </div>
                </div>
                <div className="lg:w-6/12 p-4 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r from-sky-700 to-emerald-700">
                  <div className="text-white px-4 py-6 md:p-12 md:mx-0">
                    <h4 className="text-2xl font-semibold mb-6">
                      We are more than just a company
                    </h4>
                    <p className="text-md">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
