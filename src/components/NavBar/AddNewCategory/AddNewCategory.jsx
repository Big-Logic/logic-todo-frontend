import { HiOutlinePlus } from "react-icons/hi";
import { ttBtnStyle } from "./AddNewCategoryStyle";
import ToolTip from "../../Reusables/ToolTip/ToolTip";
import NewCategoryForm from "./NewCategoryForm/NewCategoryForm";

const buttonChildren = (
  <>
    <HiOutlinePlus /> <span>Create new category</span>
  </>
);

export default () => {
  return (
    <div>
      <ToolTip buttonChildren={buttonChildren} buttonCustomStyle={ttBtnStyle}>
        <NewCategoryForm />
      </ToolTip>
    </div>
  );
};
