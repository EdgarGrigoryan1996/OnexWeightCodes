const initialState = [
    {
        id:Math.random(),
        name:"Edgar",
        orders:[
            // {
            //     id:1,
            //     track:"773186929904232",
            //     weight:0.1,
            //     getCost(){
            //         return this.weight * 8000
            //     }
            // },
            // {
            //     id:2,
            //     track:"78623731083862",
            //     weight:0.1,
            //     getCost(){
            //         return this.weight * 8000
            //     }
            // },
            // {
            //     id:3,
            //     track:"773186929904232",
            //     weight:0.1,
            //     getCost(){
            //         return this.weight * 8000
            //     }
            // },
            // {
            //     id:4,
            //     track:"773186929904232",
            //     weight:2.5,
            //     getCost(){
            //         return this.weight * 8000
            //     }
            // },
            // {
            //     id:5,
            //     track:"773186929904232",
            //     weight:0.9,
            //     getCost(){
            //         return this.weight * 8000
            //     }
            // }
        ],
        getAllOrdersCost(){
            return this.orders.reduce((aggr,val) => {
                return aggr + val.getCost()
            },0)
        }

    },
    {
        id:Math.random(),
        name:"Qis",
        orders:[
            // {
            //     id:1,
            //     track:"773186929904232",
            //     weight:0.1,
            //     getCost(){
            //         return this.weight * 8000
            //     }
            // },
            // {
            //     id:2,
            //     track:"78623731083862",
            //     weight:0.1,
            //     getCost(){
            //         return this.weight * 8000
            //     }
            // }
        ],
        getAllOrdersCost(){
            return this.orders.reduce((aggr,val) => {
                return aggr + val.getCost()
            },0)
        }

    }
]

const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_USER":
            return [
                ...state,
                {
                    id:Math.random(),
                    name:action.payload.name,
                    orders:[],
                    getAllOrdersCost(){
                        return this.orders.reduce((aggr,val) => {
                            return aggr + val.getCost()
                        },0)
                    }
                }
            ]
        case "DELETE_USER":
            return state.filter((user) => {
                return user.id !== action.payload.userId
            })
        case "DELETE_TRACK":
            return state.map((user) => {
                if(user.id === action.payload.userId){
                    return {
                        ...user,
                        orders:user.orders.filter((order) => {
                            return order.id !== action.payload.id
                        })
                    }
                }
                else{
                    return user
                }
            })

        case "ADD_ORDER" :
            return state.map((user) => {
                if(user.id === action.payload.id){
                    return {
                        ...user,
                        orders:[...user.orders,...action.payload.orders]
                    }
                }
                else{
                    return user
                }

            })

        default:
            return state
    }
}


export default usersReducer