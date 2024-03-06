import { atom } from "recoil";
import { UserType } from "types/UserType";

export const userAtom = atom<UserType>({
  key: "userAtom",
  default: {
    id: "",
    name: "",
    phone: "",
    role: "",
    is_parent: false,
  },
});
