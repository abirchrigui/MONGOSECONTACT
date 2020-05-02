
import axios from 'axios'
import { GET_CONTACT } from './actiontype'

export const getcontact = () => dispatch =>{
    axios.get('/contact-list').then(res=>{
        dispatch({
            type:GET_CONTACT,
            payload : res.data
        })
    })
}
export const addcontact =(newContact)=>dispatch=>{
    axios.post('/contact-list' , newContact).then(res=>{
        dispatch(
            getcontact()
        )
    })
}
export const editcontact =(_id , payload)=>dispatch=>{
    axios.put(`/contact-list/${_id}` , payload).then(res=>{
        dispatch(
            getcontact()
        )
    })
}

export const deletcontact =(_id)=>dispatch=>{
axios.delete(`/contact-list/${_id}`).then(res=>{
    dispatch(
        getcontact()
    )
})
}