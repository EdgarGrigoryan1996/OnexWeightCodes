import s from "./Users.module.css"
import {useSelector} from "react-redux";
import User from "./User";

const Users = () => {
    const users = useSelector((state) => {
        return state.users
    })



    if(users.length > 0){
        return (
            <div className={s.userWrapper}>
                {users.map((user) => {
                    return (
                        <User key={user.id} user={user}/>
                    )
                })}
            </div>
        )
    }
    else{
        return (
            <div className={s.noUsers}>
                <img src='https://img.freepik.com/premium-vector/vector-cartoon-illustration-of-cute-dinosaur-sad_194552-374.jpg?w=2000' alt=""/>
                    <p>No users</p>
            </div>
        )
    }


}

export default Users