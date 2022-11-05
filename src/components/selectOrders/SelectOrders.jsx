import s from "./SelectOrders.module.css"
import {useDispatch, useSelector} from "react-redux";
import Order from "../users/Order";
import {useState} from "react";

const SelectOrders = () => {

    const dispatch = useDispatch()
    const orders = useSelector((state) => {
        return state.allOrders
    })
    const currentUser = useSelector((state) => {
        return state.popupStatus.allOrdersPopup.currentUser
    })

    const [selectAllStatus,setSelectAllStatus] = useState(false)
    const [searchTrack,setSearchTrack] = useState("")

     function hidePopup(){
        dispatch({
            type:"CANCEL"
        })
         dispatch({
             type:"RESET_STATUS"
         })
     }
     function selectAll(){
         dispatch({
             type:"SELECT_ALL",
             payload:{
                 status:!selectAllStatus
             }
         })
        setSelectAllStatus(!selectAllStatus)

     }

        return (
            <div className={s.selectOrdersWrapper}>
                <div className={s.selectOrdersBlock}>
                    <span className={s.close} onClick={hidePopup}>x</span>
                    <h2>Select Orders</h2>
                    <div className={s.selectAll}>
                        <label htmlFor="selectAll">{!selectAllStatus ? "Select " : "Unselect "} all</label>
                        <input id="selectAll" type="checkbox" checked={selectAllStatus} onChange={selectAll}/>
                    </div>
                    <div className={s.searchBlock}>
                        <input
                            type="text"
                            placeholder={"Search"}
                            className={s.search}
                            value={searchTrack}
                            onChange={(e)=>{
                                setSearchTrack(e.target.value)
                            }}
                        />
                    </div>
                    <div className={s.orders}>

                        {orders.map((order) => {
                            return (
                                <div className={order}>
                                    <Order
                                        key={order.id}
                                        order={order}
                                        searchTrack = {searchTrack}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className={s.buttons}>
                        <button onClick={hidePopup}>CANCEL</button>
                        <button onClick={() => {
                            dispatch({
                                type:"ADD_ORDER",
                                payload:{
                                    id:currentUser.id,
                                    orders:orders.filter((order) => {
                                        return order.status === true
                                    })
                                }
                            })
                            dispatch({
                                type:"SET_ORDER_USER",
                                payload:{
                                    currentUser,
                                    orders:orders.filter((order) => {
                                        return order.status === true
                                    })
                                }
                            })
                            hidePopup()
                        }}>ADD</button>
                    </div>
                </div>
            </div>

        )

}

export default SelectOrders