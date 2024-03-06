import Nav from "components/Nav";
import Login from "pages/Auth/Login";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { useRecoilValue } from "recoil";
import { alertAtom } from "recoil/alertAtom";
import Alert from "components/Alert";
import { UserType } from "types/UserType";
import { userAtom } from "recoil/userAtom";
import Home from "pages/Home/Home";

const App: React.FC = () => {
  const alertState: boolean = useRecoilValue(alertAtom).state;
  const user: UserType = useRecoilValue(userAtom);
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loginState") != "success") nav("/login");
    else nav("/");
  }, []);
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-bg">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={true} />
      </div>
      {alertState ? <Alert /> : null}
    </>
  );
};

export default App;
