import { atom } from "recoil";
import { AlertType } from "types/UtilType";

export const alertAtom = atom<AlertType>({
  key: "alertAtom",
  default: {
    msg: "",
    state: false,
  },
});
