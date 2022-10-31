const initialState = {
    currentUser:null,
    status:false
}
const popupStatus = (state = initialState,action) => {
    switch (action.type) {
        case "CANCEL":
            return {
                currentUser: null,
                status:false
            }
        case "SHOW" :
            return {
                currentUser: action.payload.user,
                status:true
            }
        default:
            return state
    }
}
export default popupStatus