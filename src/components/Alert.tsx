import React from "react";
import { useRecoilValue } from "recoil";
import { alertAtom } from "recoil/alertAtom";

const Alert: React.FC = () => {
  const alertMsg: string = useRecoilValue(alertAtom).msg;
  return (
    <div className="fixed left-0 z-50 flex items-center justify-center w-full bottom-20">
      <div className="flex items-center justify-center w-1/3 h-10 font-bold rounded-full tet-white bg-slate-400">
        {alertMsg}
      </div>
    </div>
  );
};

export default Alert;
