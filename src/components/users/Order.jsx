import s from "./Users.module.css";
import {useDispatch} from "react-redux";

export default function Order({user,order,func,type}){
    const dispatch = useDispatch()
    function deleteCurrentUserInOrder(orderId){
        dispatch({
            type:"DELETE_CURRENT_USER_IN_ORDER",
            payload:{
                orderId
            }
        })
    }

    return (
        <label htmlFor={"test" + order.id}>
            <div className={s.trackLine}>
            <b>{order.id}</b>
            <span>{order.weight}kg</span>
            {type === "userOrders" ? "" : <b className={order.currentUser ? s.userAvialable : s.userNotAvialable}>{order.currentUser ? order.currentUser.name : "noUser"}</b>}
            <div>{order.track}</div>
            {type === "userOrders" ? 
                <button onClick={() => {
                func(undefined,order.id)
                    deleteCurrentUserInOrder(order.id)
            }}>x</button>
                :
                <input id={"test" + order.id} type="checkbox" disabled={order.currentUser ? true : false} checked={order.status} onChange={() => {
                    dispatch({
                        type:"CHANGE_STATUS",
                        payload:{
                            id:order.id
                        }
                    })

                }}/>}

        </div>
        </label>

    )
}