import React, { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Post = ({ post }) => {
  const [isHovered, setIsHovered] = useState(Array(post.length).fill(false));

  return (
    <div className='grid gap-[2px] mt-[20px] grid-cols-3'>
      {post?.map((el, index) => {
        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => {
              const newHoverState = [...isHovered];
              newHoverState[index] = true;
              setIsHovered(newHoverState);
            }}
            onMouseLeave={() => {
              const newHoverState = [...isHovered];
              newHoverState[index] = false;
              setIsHovered(newHoverState);
            }}
          >
            {el.images.length !== 0 ? (
              <div className="">
                <img
                  className='h-[309px] w-[325px] cursor-pointer'
                  src={`${import.meta.env.VITE_APP_FILES_URL}${el.images[0]}`}
                  alt=""
                />
                {isHovered[index] && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center gap-[30px] justify-center p-4">
                    <p className="text-white flex items-center gap-[5px]">🤍 {el.postLikeCount}</p>
                    <p className="text-white flex items-center gap-[5px]">💬 {el.comments.length}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col m-auto my-[80px] items-center">
                <CameraAltIcon sx={{ width: "67px", height: "67px" }} />
                <h1 className='text-[30px] pt-[10px] font-[700]'> Публикаций пока нет</h1>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Post;

