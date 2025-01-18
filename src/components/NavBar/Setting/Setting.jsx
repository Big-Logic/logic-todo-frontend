// import { motion } from "motion/react";
import { HiCog, HiOutlineLogout, HiOutlineUserCircle } from "react-icons/hi";
import { Container, LogoutButton, SettingLink } from "./SettingStyle";

export default () => {
  return (
    <Container
      animate={
        {
          // scale: 1,
          // transform: "translateX(100%)",
          // transition: { duration: 0.3 },
        }
      }
    >
      <ul>
        <li>
          <SettingLink to={"/account-setting"}>
            <HiOutlineUserCircle /> <span>Account</span>
          </SettingLink>
        </li>
        <li>
          <SettingLink to={"/general-setting"}>
            <HiCog /> <span>General</span>
          </SettingLink>
        </li>
        <li>
          <LogoutButton>
            <HiOutlineLogout /> <span>Log out</span>
          </LogoutButton>
        </li>
      </ul>
    </Container>
  );
};
