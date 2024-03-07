import React from "react";

const Nav: React.FC = ({}) => {
  return (
    <div className="fixed top-0 w-full h-12 flex justify-center items-center border-b-2 border-b-[#999999]/[.1]">
      <div className="w-[1200px] h-full flex justify-between items-center">
        <div className="flex items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8em"
            height="1.8em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#5c54a8"
              d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-5v8l-2.5-2.25L8 12V4H6v16h12z"
            />
          </svg>
          <span className="ml-3 text-lg font-bold text-m-600">YH-Diary</span>
        </div>
        <div className="flex items-center h-full">
          <span className="text-lg font-bold text-m-600">연호의 일기</span>
          <span className="text-lg font-bold">
            &nbsp;에 오신 것을 환영합니다
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
