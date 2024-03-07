import React from "react";
import { PostCardProps } from "interface/BoardInterface";

const PostCard: React.FC<PostCardProps> = ({ postCardInfo }) => {
  return (
    <div className="w-[240px] h-[320px] shadow-card bg-white border-[#EEEEEE] border-[0.5px] rounded-xl px-2 py-2 flex flex-col justify-between items-center hover:shadow-card-hover">
      <div className="w-full">
        <img
          className="w-full h-[150px] object-cover rounded-xl"
          src={postCardInfo.thumbnail}
        ></img>
        <div className="mt-2 text-lg font-bold text-primary">
          {postCardInfo.title}
        </div>
        <p className="mt-2 font-medium line-clamp-4 text-secondary">
          {postCardInfo.description}
        </p>
      </div>
      <button className="w-full h-8 text-sm font-semibold rounded-full bg-m-200 hover:bg-m-600 hover:text-white">
        자세히 보기
      </button>
    </div>
  );
};

export default PostCard;
