import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT,USER_REGISTRATION_FAIL,USER_REGISTRATION_REQUEST,USER_REGISTRATION_SUCCESS } from "../Constants/userConstants"
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            "Content-type": "application/json",
        }
        const { data } = await axios.post('/api/users/login', { email, password }, config);

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        localStorage.setItem("userinfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL, payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
export const logout = () => (dispatch) => {
    localStorage.removeItem("userinfo")
    dispatch({ type: USER_LOGOUT })
}
export const registeration = (name, email, password,pic) => async(dispatch) => {
   try {
    dispatch({type:USER_REGISTRATION_REQUEST})
    const config = {
        "Content-type": "application/json",
    }
    const data = await axios.post('/api/users',{name,email,password,pic},config)
    dispatch({type:USER_REGISTRATION_SUCCESS,payload:data})
    localStorage.setItem('userinfo', JSON.stringify(data));    
   } catch (error) {
    dispatch({type:USER_REGISTRATION_FAIL,payload
    :error.response && error.response.data.message?error.response.data.message:error.message
    })
   }
} 