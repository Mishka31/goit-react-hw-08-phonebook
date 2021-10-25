import s from "./userMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "./avatar-profile.png";
import authSelectors from "../../redux/auth/auth-selectors.js";
import authOperations from "../../redux/auth/auth-operations.js";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={s.list}>
      <img src={Avatar} alt="" className={s.avatar} />
      <p>{name}, wellcome! </p>
      <button type="button" className={s.button} onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
