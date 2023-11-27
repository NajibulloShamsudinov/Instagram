import { ModalPostTrue, CloseModals } from "../../reducers/explore/Explore";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";

const Explore = () => {
  let dispatch = useDispatch();
  let open = useSelector((store) => store.explore.ModalPost);
  console.log(open,"s");
  return (
    // <>
    //   <div  className="Continer justify-start  pl-[5%]  p-[10px] flex flex-wrap  gap-[5px]   m-auto  w-[85%] m-auto items-center   ">
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%] h-[306.94px]"
    //       src="https://i.pinimg.com/236x/35/fe/3e/35fe3ee939b1cedbc0843253ef87d449.jpg"
    //       alt=""
    //     />
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%]   bg-cover h-[306.94px]"
    //       src="https://i.pinimg.com/236x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg"
    //       alt=""
    //     />
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%] h-[306.94px]"
    //       src="https://i.pinimg.com/236x/e9/14/10/e914100ed7409daebdc6f68c93fe5743.jpg"
    //       alt=""
    //     />
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%] h-[306.94px]"
    //       src="https://i.pinimg.com/236x/5f/a3/28/5fa3283a9fa6a17da349df2a526b53ec.jpg"
    //       alt=""
    //     />
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%] h-[306.94px]"
    //       src="https://i.pinimg.com/236x/80/1c/87/801c877d6a1f16b6aac1b87bb8ae887e.jpg"
    //       alt=""
    //     />
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%] h-[306.94px]"
    //       src="https://i.pinimg.com/236x/88/a7/93/88a79335efa6b638d305a3703514c4f9.jpg"
    //       alt=""
    //     />
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%]  h-[306.94px]"
    //       src="https://i.pinimg.com/236x/ac/1b/00/ac1b00fe4e2098e12873133d798d6b36.jpg"
    //       alt=""
    //     />
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%] h-[306.94px]"
    //       src="https://i.pinimg.com/236x/99/1f/e4/991fe460044e0bce30dc6ab521ff15fd.jpg"
    //       alt=""
    //     />
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%] h-[306.94px]"
    //       src="https://i.pinimg.com/236x/99/1f/e4/991fe460044e0bce30dc6ab521ff15fd.jpg"
    //       alt=""
    //     />
    //     <img
    //       onClick={() => dispatch(ModalPostTrue())}
    //       className="w-[31%] h-[306.94px]"
    //       src="https://i.pinimg.com/236x/99/1f/e4/991fe460044e0bce30dc6ab521ff15fd.jpg"
    //       alt=""
    //     />
    //   </div>
    //   <div>
    //     {open ? (
    //       <div className="bg-[#00000095]  flex justify-center items-center  fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
    //         <h1
    //           className=" absolute cursor-pointer  left-[96%] bottom-[95%]  text-[white]"
    //           onClick={() => dispatch(CloseModals())}
    //         >
    //           <ClearIcon />
    //         </h1>
    //         <div className="w-[70%] flex bg-[white] h-[95%] ">
    //           <div className=" rext w-[60%] h-[100%] inline-block">
    //             <img
    //               className="w-[100%]  h-[100%]"
    //               src="https://i.pinimg.com/236x/35/fe/3e/35fe3ee939b1cedbc0843253ef87d449.jpg"
    //               alt=""
    //             />
    //           </div>
    //           <div className=" w-[40%] h-[100%]">
    //             <div className="w-[100%] h-[7%] p-[1.5%]     border-b-[00.111px] border-b-[#d1cbcb] ">
    //               <div className="flex items-center justify-start gap-[10px]">
    //                 <img
    //                   className="w-[40px] rounded-[50px] h-[40px]"
    //                   src="https://i.pinimg.com/236x/ac/1b/00/ac1b00fe4e2098e12873133d798d6b36.jpg"
    //                   alt=""
    //                 />
    //                 flutterdaily
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ) : null}
    //   </div>
    // </>
    <>
      <div className="Continer justify-start  pl-[5%] pb-[0] p-[10px] flex flex-wrap  gap-y-[9px] gap-x-[5px]   m-auto  w-[85%] m-auto items-center   ">
        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-27.7%] h-[278.94px]"
          src="https://i.pinimg.com/236x/5a/79/f7/5a79f714ec14dad7e4714c839631637e.jpg"
          alt=""
        />

        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%]  mt-[-27.7%]  bg-cover h-[278.94px]"
          src="https://i.pinimg.com/236x/bc/2f/d3/bc2fd387a7a784492bc642c6a094468b.jpg"
          alt=""
        />
        <video
          autoPlay
          loop
          muted
          className="w-[31%]   bg-cover "
          src="/src/assets/video/nnbnb n.mp4"
        ></video>

        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-55.8%] h-[278.94px]"
          src="https://i.pinimg.com/236x/ee/0d/b6/ee0db61fc77dd67bb6c492677b0ebfd5.jpg"
          alt=""
        />
        <img
          className="w-[31%] mt-[-55.8%] h-[278.94px]"
          src="https://i.pinimg.com/236x/80/1c/87/801c877d6a1f16b6aac1b87bb8ae887e.jpg"
          alt=""
        />
        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-YYYpx] h-[278.94px]"
          src="https://i.pinimg.com/236x/88/a7/93/88a79335efa6b638d305a3703514c4f9.jpg"
          alt=""
        />
        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-28.9%]  h-[278.94px]"
          src="https://i.pinimg.com/236x/ac/1b/00/ac1b00fe4e2098e12873133d798d6b36.jpg"
          alt=""
        />
        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-28.9%] h-[278.94px]"
          src="https://i.pinimg.com/236x/99/1f/e4/991fe460044e0bce30dc6ab521ff15fd.jpg"
          alt=""
        />
      </div>
      <div className="Continer mt-[-0.2%]  justify-start pt-[0] flex-row-reverse pl-[0.2%] pr-[5.5%]   flex flex-wrap  gap-y-[9px] gap-x-[5px]    w-[85%] m-auto items-center   ">
        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-27.7%] h-[278.94px]"
          src="https://i.pinimg.com/236x/d3/82/a6/d382a6652ed45f457316249d13e187ac.jpg"
          alt=""
        />

        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%]  mt-[-27.7%]  bg-cover h-[278.94px]"
          src="https://i.pinimg.com/236x/5f/9d/86/5f9d86a8a612c8ee0e89ef8b0685602b.jpg"
          alt=""
        />
        <video
          autoPlay
          loop
          muted
          className="w-[31%]   bg-cover "
          src="/src/assets/video/i.mp4"
        ></video>

        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-55.8%] h-[278.94px]"
          src="https://i.pinimg.com/236x/d2/44/9d/d2449d25411fa41a98e751c914816db8.jpg"
          alt=""
        />
        <img
          className="w-[31%] mt-[-55.8%] h-[278.94px]"
          src="https://i.pinimg.com/236x/7c/be/8a/7cbe8ace4093b2aac8fba4cceaa58a25.jpg"
          alt=""
        />
        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-YYYpx] h-[278.94px]"
          src="https://i.pinimg.com/236x/88/a7/93/88a79335efa6b638d305a3703514c4f9.jpg"
          alt=""
        />
        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-28.9%]  h-[278.94px]"
          src="https://i.pinimg.com/236x/ac/1b/00/ac1b00fe4e2098e12873133d798d6b36.jpg"
          alt=""
        />
        <img
          onClick={() => dispatch(ModalPostTrue())}
          className="w-[31%] mt-[-28.9%] h-[278.94px]"
          src="https://i.pinimg.com/236x/25/cd/5f/25cd5f665852d7a1c655a000b9d5d03b.jpg"
          alt=""
        />
      </div>

      <div>
        {open ? (
          <div className="bg-[#00000095]  flex justify-center items-center  fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
            <h1
              className=" absolute cursor-pointer  left-[96%] bottom-[95%]  text-[white]"
              onClick={() => dispatch(CloseModals())}
            >
              <ClearIcon />
            </h1>
            <div className="w-[70%] flex bg-[white] h-[95%] ">
              <div className=" rext w-[60%] h-[100%] inline-block">
                <img
                  className="w-[100%]  h-[100%]"
                  src="https://i.pinimg.com/236x/35/fe/3e/35fe3ee939b1cedbc0843253ef87d449.jpg"
                  alt=""
                />
              </div>
              <div className=" w-[40%] h-[100%]">
                <div className="w-[100%] h-[7%] p-[1.5%]     border-b-[00.111px] border-b-[#d1cbcb] ">
                  <div className="flex items-center justify-start gap-[10px]">
                    <img
                      className="w-[40px] rounded-[50px] h-[40px]"
                      src="https://i.pinimg.com/236x/ac/1b/00/ac1b00fe4e2098e12873133d798d6b36.jpg"
                      alt=""
                    />
                    flutterdaily
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Explore;
