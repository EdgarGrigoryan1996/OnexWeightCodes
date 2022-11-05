const initialState = {
    allOrdersPopup:{
        currentUser:null,
        status:false
    },
    deleteUserPopup:{
        currentUser:null,
        status:false
    }
}
const popupStatus = (state = initialState,action) => {
    switch (action.type) {
        case "CANCEL":
            return {
                ...state,
                allOrdersPopup: {
                    currentUser: null,
                    status:false
                }

            }
        case "SHOW" :
            return {
                ...state,
                allOrdersPopup: {
                    currentUser: action.payload.user,
                    status:true
                }

            }
        case "SHOW_DELETE_POPUP":
            return {
                ...state,
                deleteUserPopup: {
                    currentUser: action.payload.currentUser,
                    status:true
                }
            }
        case "HIDE_DELETE_POPUP":
            return {
                ...state,
                deleteUserPopup: {
                    currentUser: null,
                    status:false
                }
            }
        default:
            return state
    }
}
export default popupStatus