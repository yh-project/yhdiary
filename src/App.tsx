import Nav from "components/Nav";
import Login from "pages/Auth/Login";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { alertAtom } from "recoil/alertAtom";
import Alert from "components/Alert";
import { userAtom } from "recoil/userAtom";
import Home from "pages/Home/Home";
import PocketBase from "pocketbase";
import { UserType } from "types/UserType";

const App: React.FC = () => {
  const alertState: boolean = useRecoilValue(alertAtom).state;
  const setUser = useSetRecoilState(userAtom);
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loginState") != "success") nav("/login");
    else {
      const url: string | undefined = process.env.REACT_APP_API_URL;
      const pb = new PocketBase(url);
      pb.collection("Member")
        .getFirstListItem(`role="${localStorage.getItem("role")}"`)
        .then((res) => {
          const newUser: UserType = {
            id: res.id,
            name: res.name,
            phone: res.phjone,
            role: res.role,
            is_parent: res.is_parent,
          };
          setUser(newUser);
          nav("/");
        });
    }
  }, []);
  return (
    <>
      <div className="flex justify-center w-full h-screen bg-bg">
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
