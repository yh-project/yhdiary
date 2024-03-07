import { SideMenuProps } from "interface/BoardInterface";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/userAtom";
import { UserType } from "types/UserType";

const SideMenu: React.FC<SideMenuProps> = ({ setState }) => {
  const user: UserType = useRecoilValue(userAtom);
  const nav = useNavigate();
  return (
    <div className="w-[280px] h-[320px] rounded-2xl bg-white shadow-figma flex flex-col items-center">
      <div className="mt-8 text-lg font-bold text-primary">
        <span className="text-xl font-extrabold text-m-600">{user.role}</span>{" "}
        님
      </div>
      <div className="text-lg font-bold text-primary">
        연호의 일기에 와주셔서 고마워요!
      </div>
      <div className="flex flex-wrap justify-center w-full mt-6 gap-x-4">
        <div
          id="board"
          className="font-semibold w-20 h-20 border-m-200 border-[1px] rounded-2xl flex flex-col items-center justify-between py-1 hover:bg-m-200"
          onClick={() => setState("board")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="#5c54a8"
              d="M4 13c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0-8c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1m0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1M7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1m-3 5c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0-8c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1m0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1M7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1"
            />
          </svg>
          게시판
        </div>
        <div
          id="gallery"
          className="font-semibold w-20 h-20 border-m-200 border-[1px] rounded-2xl flex flex-col items-center justify-between py-1 hover:bg-m-200"
          onClick={() => setState("gallery")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
          >
            <path
              fill="#5c54a8"
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"
            />
          </svg>
          갤러리
        </div>
        {user.is_parent && (
          <div
            id="write"
            className="font-semibold w-20 h-20 border-m-200 border-[1px] rounded-2xl flex flex-col items-center justify-between py-1 hover:bg-m-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
            >
              <path
                fill="#5c54a8"
                d="M21 10V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h6v-1.87l8.39-8.39c.44-.44 1-.68 1.61-.74m-7-5.5l5.5 5.5H14zm8.85 9.69l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72m-3.72-.36l2.04 2.04L15.04 22H13v-2.04z"
              />
            </svg>
            글쓰기
          </div>
        )}
      </div>
      <button
        className="w-[240px] h-9 rounded-full bg-m-200 hover:bg-m-600 hover:text-white font-bold mt-10"
        onClick={() => {
          localStorage.removeItem("loginState");
          localStorage.removeItem("role");
          nav("/login");
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default SideMenu;
