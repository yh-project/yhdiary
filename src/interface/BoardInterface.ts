import { Dispatch, SetStateAction } from "react";
import { PostCardType } from "types/BoardType";

export interface SideMenuProps {
  setState: Dispatch<SetStateAction<string>>;
}

export interface PostCardProps {
  postCardInfo: PostCardType;
}
