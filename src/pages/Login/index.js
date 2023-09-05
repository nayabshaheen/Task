import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Login = () => {
  const [isvisibilityOpen, setIsvisibilityOpen] = useState(false);
  const handleShow = () => {
    setIsvisibilityOpen(!isvisibilityOpen);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("data", event);
  };
  return (
    <div>
      <div className="w-full flex justify-center items-center min-h-screen">
        <div className="w-full max-w-lg">
          <form onSubmit={onSubmit} className=" rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-center text-2xl mb-5 font-bold mb-12 ">
              Log In
            </h3>
            <div className="mb-4">
              <Input
                name="Email"
                id="Email"
                placeholder="Email"
                className="shadow appearance-none border rounded rounded-lg border-gray-200  bg-gray-50 w-full py-4 px-3 text-gray-700 leading-tight "
              />
            </div>
            <div className="mb-10 relative">
              <Input
                name="Password"
                id="Password"
                placeholder="Password"
                className="shadow appearance-none border rounded rounded-lg border-gray-200  bg-gray-50 w-full py-4 px-3 text-gray-700 leading-tight "
                type={isvisibilityOpen ? "text" : "Password"}
              />
              <div
                className="absolute top-1.5 right-5 font-medium py-2"
                onClick={handleShow}
              >
                Show
              </div>
            </div>

            <div className="flex items-center justify-between ">
              <Button
                type="submit"
                size="large"
                variant="naked"
                className="w-full rounded-3xl"
              >
                <Link to={"/Task"}>Log In</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
