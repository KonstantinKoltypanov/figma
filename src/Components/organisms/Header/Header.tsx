import { ButtonGroupHeader } from "@/Components/molecules/ButtonGroupHeader/DrowdownGroup";
import * as style from "./Header.module.scss"
import Logo from "@/assets/Logo.svg"
import { LoginGroup } from "@/Components/molecules/LoginGroup/LoginGroup";

export default function Header() {
    return (
      <header className={style.header}>
        <Logo className={style.logo} />
        <div className={style.buttons}>
          <ButtonGroupHeader />    
          <LoginGroup />
        </div>
      </header>
    );
}
