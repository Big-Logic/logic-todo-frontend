import { HiOutlineDotsVertical } from "react-icons/hi";

import {
  Container,
  DT,
  ImageContainer,
  NameImageContainer,
  ttBtnStyle,
  UserName,
} from "./UserProfileStyle";

// Components
import ToolTip from "../../Reusables/ToolTip/ToolTip";
import Setting from "../Setting/Setting";

export default () => {
  return (
    <Container>
      <NameImageContainer>
        <ImageContainer>
          <img
            src="https://mighty.tools/mockmind-api/content/human/104.jpg"
            alt="User First Name"
          />
        </ImageContainer>
        <div>
          <UserName>Alfred</UserName>
        </div>
      </NameImageContainer>
      <DT>
        <ToolTip
          buttonChildren={<HiOutlineDotsVertical />}
          position="bottom"
          buttonCustomStyle={ttBtnStyle}
        >
          <Setting />
        </ToolTip>
      </DT>
    </Container>
  );
};
