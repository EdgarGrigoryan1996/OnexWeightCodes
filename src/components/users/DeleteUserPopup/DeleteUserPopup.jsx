import s from "./DeleteUserPopup.module.css"
import {useDispatch, useSelector} from "react-redux";
export default function DeleteUserPopup(){
    const dispatch = useDispatch()
  const currentUser = useSelector((state) => {
      return state.popupStatus.deleteUserPopup.currentUser
  })

    function deleteUser(userId){
        dispatch({
            type:"DELETE_USER",
            payload:{
                userId
            }
        })
    }
    function deleteOrdersFromUser(userId){
        dispatch({
            type:"DELETE_ORDERS_FROM_USER",
            payload:{
                userId
            }
        })
    }
    function hidePopup(){
        dispatch({
            type:"HIDE_DELETE_POPUP"
        })
    }


    return (
        <div className={s.popupWrapper}>
            <div className={s.popupBlock}>
                <span onClick={hidePopup}>x</span>
                <div><h2>Are you sure?</h2></div>
                <div className={s.buttons}>
                    <button
                        className={s.btnSuccess}
                        onClick={() => {
                            deleteUser(currentUser.id)
                            deleteOrdersFromUser(currentUser.id)
                            hidePopup()
                        }}
                    >YES</button>
                    <button
                        className={s.btnDanger}
                        onClick={hidePopup}
                    >No</button>
                </div>

            </div>
        </div>
    )
}