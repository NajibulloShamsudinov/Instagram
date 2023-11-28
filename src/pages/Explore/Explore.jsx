import { ModalPostTrue, CloseModals } from "../../reducers/explore/Explore";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";

const Explore = () => {
  let dispatch = useDispatch();
  let open = useSelector((store) => store.explore.ModalPost);
  
};
export default Explore; 