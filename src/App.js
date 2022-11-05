import s from "./GlobalStyles.module.css"
import AddUser from "./components/addUser/AddUser";
import Users from "./components/users/Users";
import SelectOrders from "./components/selectOrders/SelectOrders";
import {useSelector} from "react-redux";
import DeleteUserPopup from "./components/users/DeleteUserPopup/DeleteUserPopup";
function App() {
  const popup = useSelector((state) => {
    return state.popupStatus
  })
  return (
    <div className={s.wrapper}>
      <AddUser />
        <Users />
      { popup.allOrdersPopup.status ? <SelectOrders/> : ""}
      {popup.deleteUserPopup.status ? <DeleteUserPopup /> : ""}

    </div>
  );
}

export default App;
