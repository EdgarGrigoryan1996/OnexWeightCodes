import s from "./Users.module.css";
import Order from "./Order";
import {useDispatch} from "react-redux";

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
    return (
        <div className={s.userBlock}>
            <span className={s.deleteUser} onClick={() => {
                deleteUser(user.id)
                deleteOrdersFromUser(user.id)
            }}>x</span>
            <div className={s.userName}>{user.name}</div>
            <div>
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