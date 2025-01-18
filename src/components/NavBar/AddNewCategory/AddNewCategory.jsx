import { HiOutlinePlus } from "react-icons/hi";
import { ttBtnStyle } from "./AddNewCategoryStyle";
import ToolTip from "../../Reusables/ToolTip/ToolTip";

const buttonChildren = (
  <>
    <HiOutlinePlus /> <span>Create new category</span>
  </>
);

export default () => {
  return (
    <div>
      <ToolTip buttonChildren={buttonChildren} buttonCustomStyle={ttBtnStyle}>
        <div>Hello</div>
      </ToolTip>
    </div>
  );
};
