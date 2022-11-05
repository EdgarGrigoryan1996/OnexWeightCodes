import s from "./Users.module.css";
import {useDispatch} from "react-redux";

export default function Order({order,func,type,searchTrack}){
    const dispatch = useDispatch()
    const orderTrackSymbol = order.track.split("")
    const index = order.track.indexOf(searchTrack)
    console.log(index)

    function deleteCurrentUserInOrder(orderId){
        dispatch({
            type:"DELETE_CURRENT_USER_IN_ORDER",
            payload:{
                orderId
            }
        })
    }
    function checkSymbol(text,symbol){
        return text.includes(symbol)
    }

    return (
        <label htmlFor={"test" + order.id}>
            <div className={order.currentUser ? s.trackLine + " " + s.notAllowed : s.trackLine}>
            <b className={s.orderId}>{order.id}</b>
            <span className={s.orderWeight}>{order.weight}kg</span>
            {type === "userOrders" ? "" : <b  className={order.currentUser ? s.userAvialable : s.userNotAvialable}>{order.currentUser ? order.currentUser.name : "noUser"}</b>}


                    <div className={s.orderTrack} >
                        {type === "userOrders" ? order.track
                            :
                            !checkSymbol(order.track,searchTrack) ? order.track :


                            orderTrackSymbol.map((symbol,i) => {
                                if(i >= index && i < index + searchTrack.length){
                                    return (
                                        <i className={s.test}>{symbol}</i>
                                    )
                                }
                                else{
                                    return (
                                        <i>{symbol}</i>
                                    )
                                }
                                })
                        }

                    </div>
                    {type === "userOrders" ?
                        <button
                            onClick={() => {
                            func(undefined,order.id)
                            deleteCurrentUserInOrder(order.id)
                        }}>x</button>
                        :
                        <input
                            id={"test" + order.id} className={s.selectOrder}
                            type="checkbox" disabled={order.currentUser ? true : false}
                            checked={order.status}
                            onChange={() => {
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