import s from "./AddUser.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
const AddUser = () => {
    const dispatch = useDispatch()
    function addUser(name){
        dispatch({
            type:"ADD_USER",
            payload:{
                name:name
            }
        })
    }
    const [userNameText,setUserNameText] = useState("")
    return (
        <div className={s.addUserWrapper}>
            <div className={s.addUserBlock}>
                <input className={s.userName} type="text" placeholder="User Name" value={userNameText} onChange={(e) => {
                    setUserNameText(e.target.value)
                }}/>
                <button className={s.addButton} onClick={() => {
                    if(userNameText.trim() === ""){
                        alert("Please write name")
                        setUserNameText("")
                    }
                    else{
                        addUser(userNameText)
                        setUserNameText("")
                    }

                }}>ADD</button>
            </div>
        </div>
    )
}

export default AddUser