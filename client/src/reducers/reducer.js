import { GET_CONTACT } from "../actions/actiontype";





const INITIAL_STATE = {
    contactList : [] 
}

 
 function Reducer  (state = INITIAL_STATE, {type,payload})  {
    switch (type) {
        case  GET_CONTACT :
            return {...state , contactList:payload}
        

        default:
            return state
    }
}
export default  Reducer