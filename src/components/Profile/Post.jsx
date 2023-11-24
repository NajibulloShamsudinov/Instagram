import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Post = () => {
  return (
    <div>
      <div className="flex flex-col m-auto my-[80px] items-center">
      <CameraAltIcon sx={{width:"67px",height:"67px"}}/>
      <h1 className='text-[30px] pt-[10px] font-[700]'>Публикаций пока нет</h1>
      </div>
    </div>
  )
}

export default Post
