import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';



const style = {
  rounded:20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
};

const ModalSetings = ({open,children}) => (
    <div>
        <Modal
            open={open}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <ul className='text-center  '>
                        <li onClick={()=>alert("hello")} className='text-[red] border-[2px] p-[10px]'>Пожаловатся</li>
                        <li onClick={()=>alert("Невозможно отменить подписку")} className='text-[red] border-[2px] p-[10px]'>Отменить подписку</li>
                        <li onClick={()=>alert("Избранное 😃")} className='border-[2px] p-[10px]'>Добавить в избранное</li>
                        <li onClick={()=>alert("Публикатция не найдена")} className='border-[2px] p-[10px]'>Перейти к публикатции</li>
                        <li className='border-[2px] p-[10px]'>Поделиться...</li>
                        <li className='border-[2px] p-[10px]'>Копировать ссылку</li>
                        <li className='border-[2px] p-[10px]'>Всатавить на сайт</li>
                        <li className='border-[2px] p-[10px]'>Об аккаунте</li>
                        <li className='border-[2px] p-[10px]' >
                        {children}
                        </li>
                    </ul>
                </Box>
            </Fade>
        </Modal>
    </div>
)

export default ModalSetings
