import React, { useState } from "react";
import PocketBase from "pocketbase";
import { useAlert } from "utils/useAlert";
import { userAtom } from "recoil/userAtom";
import { useSetRecoilState } from "recoil";
import { LoginInfoType } from "types/AuthType";
import { UserType } from "types/UserType";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const url: string | undefined = process.env.REACT_APP_API_URL;
  const pb = new PocketBase(url);

  const alert = useAlert();
  const nav = useNavigate();
  const setUser = useSetRecoilState(userAtom);
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    name: "",
    phone: "",
  });

  return (
    <div className="w-[300px] h-[500px] flex flex-col justify-center items-center">
      <div className="text-3xl font-bold text-primary">
        연호의 "가족" 이신가요?
      </div>
      <div className="w-full mt-10 h-fit">
        <input
          type="text"
          placeholder="이름"
          className="font-medium w-full h-12 rounded-full border-[1px] outline-none border-m-200 focus:border-m-600 px-6 placeholder:text-placeholder placeholder:font-light"
          onChange={(e) => {
            const newInfo: LoginInfoType = {
              ...loginInfo,
              name: e.target.value,
            };
            setLoginInfo(newInfo);
          }}
        />
        <input
          type="text"
          placeholder="전화번호(000-0000-0000)"
          className="mt-2 font-medium w-full h-12 rounded-full border-[1px] outline-none border-m-200 focus:border-m-600 px-6 placeholder:text-placeholder placeholder:font-light"
          onChange={(e) => {
            const newInfo: LoginInfoType = {
              ...loginInfo,
              phone: e.target.value,
            };
            setLoginInfo(newInfo);
          }}
        />
      </div>
      <button
        className="w-[300px] h-12 rounded-full bg-m-200 mt-6 font-semibold text-lg"
        onClick={async () => {
          await pb
            .collection("Member")
            .getFirstListItem(
              'name="' + loginInfo.name + '"&&phone="' + loginInfo.phone + '"'
            )
            .then((res) => {
              const newUser: UserType = {
                id: res.id,
                name: res.name,
                phone: res.phjone,
                role: res.role,
                is_parent: res.is_parent,
              };
              setUser(newUser);
              localStorage.setItem("loginState", "success");
              nav("/");
            })
            .catch(() => alert.onAndOff("당신은 가족이 맞으십니까??"));
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
