import React, { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import { PostCardType } from "types/BoardType";
import PostCard from "./PostCard";

const Board: React.FC = () => {
  const url: string | undefined = process.env.REACT_APP_API_URL;
  const pb = new PocketBase(url);

  const [posts, setPosts] = useState<PostCardType[]>([]);
  useEffect(() => {
    pb.collection("Board")
      .getList(1, 6)
      .then((res) => {
        const post: PostCardType[] = [];
        res.items.forEach((p) => {
          let newPhotos: string[] = [];
          p.photos.forEach((link: string) =>
            newPhotos.push(`${url}/api/files/${p.collectionId}/${p.id}/${link}`)
          );

          const newPost: PostCardType = {
            id: p.id,
            title: p.title,
            description: p.description,
            thumbnail: `${url}/api/files/${p.collectionId}/${p.id}/${p.thumbnail}`,
            photos: newPhotos,
            created: p.created,
            updated: p.updated,
          };

          post.push(newPost);
        });

        setPosts(post);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-[880px] h-[820px] rounded-2xl shadow-figma bg-white px-8 pt-6">
      <div className="text-2xl font-bold text-primary">게시판</div>
      <hr className="border-[1px] w-full border-hr mt-4" />
      <div className="grid items-center grid-cols-3 mt-6 gap-y-6 place-items-center">
        {posts.map((p, i) => (
          <PostCard key={i} postCardInfo={p} />
        ))}
      </div>
    </div>
  );
};

export default Board;
