import { useEffect } from 'react'
import axios from 'axios'
import NavigationGuest from './NavigationGuest'
import NavigationMember from './NavigationMember'
import NavigationAdmin from './NavigationAdmin'
import { useSelector, useDispatch } from 'react-redux'
import { setIsLogin } from '../../redux/isLoginSlice'

const Navigation = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.isLogin.isLogin)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/authentication-account`, { withCredentials: true })
        .then((response) => {
            dispatch(setIsLogin({status: response.data.status, payload: response.data.payload}))
        })
    }, [dispatch])
    
    return (
        <>
            {isLogin.status && isLogin.payload.role === 1 ? <NavigationAdmin /> : isLogin.status && isLogin.payload.role === 0 ? <NavigationMember /> : <NavigationGuest />}
        </>
    )
}

export default Navigation