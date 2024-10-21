"use client";
import Input from "./components/Input";
import { Button, Text } from "@radix-ui/themes";
import { useState } from "react";

const LoginPage = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-background">
        <div className="flex justify-center items-center border-3 border-gray-400 rounded-[50px] w-[70%] shadow-md font-quicksand">
          <div className="flex w-full py-40">
            {/* Image on the left */}
            <div className="w-1/2 flex justify-center items-center">
              <img src="img_login.png" alt="Login Image" className="w-3/4" />
            </div>

            {/* Divider */}
            <div className="w-[2px] h-[400px] bg-gray-300 flex justify-center items-center"></div>

            {/* Content on the right */}
            <div className="w-1/2 flex items-center">
              <div className="w-[80%] mx-auto">
                <h1 className="text-3xl font-semibold text-center" style={{ color: "#000" }}>
                  Đăng nhập
                </h1>
                <div className="p-4 mt-10">
                  <Input
                    value={authData.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    id="email"
                    type="email"
                    className="mb-4"
                  />
                  <Input
                    value={authData.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="Mật khẩu"
                    id="password"
                    type="password"
                    className="mb-4"
                  />

                  <Button
                    className="w-full py-2 rounded-lg"
                    style={{ backgroundColor: "#003465", color: "#FFFFFF" }}
                  >
                    <Text>Đăng nhập</Text>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
