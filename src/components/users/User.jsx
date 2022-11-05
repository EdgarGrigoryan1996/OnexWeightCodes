import s from "./Users.module.css";
import Order from "./Order";
import {useDispatch, useSelector} from "react-redux";

export default function User({user}){

    const dispatch = useDispatch()
    function deleteTrack(userId = user.id,trackId){
        dispatch({
            type:"DELETE_TRACK",
            payload:{
                userId:userId,
                id:trackId
            }
        })
    }
    function showPopup(){
        dispatch({
            type:"SHOW",
            payload:{
                user:user
            }
        })
    }

    return (
        <div className={s.userBlock}>

            <span className={s.deleteUser} onClick={() => {
                dispatch({
                    type:"SHOW_DELETE_POPUP",
                    payload:{
                        currentUser:user
                    }
                })
                // deleteUser(user.id)
                // deleteOrdersFromUser(user.id)
            }}>x</span>
            <div className={s.userName}>{user.name}</div>
            <div className={s.orders}>
                {user.orders.map((order) => {
                    return (
                        <Order key={order.id} user={user} order={order} func={deleteTrack} type="userOrders"/>
                    )
                })}
            </div>
            <div className={s.totalCost}>Total Cost : <span>{user.getAllOrdersCost()}</span></div>
            <div>
                <button className={s.addButton} onClick={showPopup}>Add Orders</button>
            </div>

        </div>
    )
}