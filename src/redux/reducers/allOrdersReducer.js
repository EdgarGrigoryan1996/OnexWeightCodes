const initialState = [
    {
        id:1,
        track:"773186929904232",
        weight:0.1,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:2,
        track:"78623731083862",
        weight:0.1,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:3,
        track:"78623434878684",
        weight:0.1,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:4,
        track:"78623395688856",
        weight:0.1,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:5,
        track:"YT6798639755222",
        weight:0.2,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:6,
        track:"773186342967585",
        weight:0.6,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:7,
        track:"432834577166509",
        weight:0.1,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:8,
        track:"773187568218436",
        weight:0.2,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:9,
        track:"432849760281883",
        weight:0.2,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:10,
        track:"773187605138451",
        weight:0.2,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:11,
        track:"yt6814926191112",
        weight:0.2,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:12,
        track:"432849569454039",
        weight:0.4,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:13,
        track:"yt6814233445936",
        weight:0.1,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:14,
        track:"yt6809737797789",
        weight:0.1,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:15,
        track:"JT3014608798799",
        weight:1.1,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:16,
        track:"YT6794620533322",
        weight:0.2,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:17,
        track:"78621928674614",
        weight:0.4,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:18,
        track:"yt6795546230178",
        weight:0.6,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:19,
        track:"yt6796292937889",
        weight:0.7,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },
    {
        id:20,
        track:"773185839901951",
        weight:0.8,
        status:false,
        currentUser:null,
        getCost(){
            return this.weight * 8000
        }
    },

]

const allOrdersReducer = (state = initialState,action) => {
    switch (action.type) {
        case "CHANGE_STATUS":
            return state.map((order) => {
                if(order.id === action.payload.id){
                    return {
                        ...order,
                        status:!order.status
                    }
                }
                else{
                    return order
                }
            })
        case "RESET_STATUS":
            return state.map((order) => {
                return {
                    ...order,
                    status:false
                }
            })
        case "SET_ORDER_USER":
            return state.map((order) => {
                if(action.payload.orders.includes(order)){
                    return {
                        ...order,
                        currentUser:action.payload.currentUser
                    }
                }
                else{
                    return order
                }
            })
        case "DELETE_CURRENT_USER_IN_ORDER":
            return state.map((order) => {
                if(order.id === action.payload.orderId){
                    return {
                        ...order,
                        currentUser:null
                    }
                }
                else{
                    return order
                }
            })
        case "DELETE_ORDERS_FROM_USER":
            return state.map((order) => {
                if(order.currentUser !== null && order.currentUser.id === action.payload.userId){
                    return {
                        ...order,
                        currentUser:null
                    }
                }
                else{
                    return order
                }
            })
        case "SELECT_ALL":
            if(action.payload.status){
                return state.map((order) => {
                    if(order.currentUser === null){
                        return {
                            ...order,
                            status:true
                        }
                    }
                    else{
                        return order
                    }
                })
            }
            else{
                return state.map((order) => {
                    if(order.currentUser === null){
                        return {
                            ...order,
                            status:false
                        }
                    }
                    else{
                        return order
                    }
                })
            }
        default:
            return state
    }
}
export default allOrdersReducer