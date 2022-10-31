import s from "./GlobalStyles.module.css"
import AddUser from "./components/addUser/AddUser";
import Users from "./components/users/Users";
import SelectOrders from "./components/selectOrders/SelectOrders";
import {useSelector} from "react-redux";
function App() {
  const popup = useSelector((state) => {
    return state.popupStatus
  })
  return (
    <div className={s.wrapper}>
      <AddUser />
        <Users />
      { popup.status ? <SelectOrders/> : ""}
    </div>
  );
}

export default App;
