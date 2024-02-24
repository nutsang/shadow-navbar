import { Link, useNavigate } from 'react-router-dom'
import MetaHeader from '../../components/meta-header/MetaHeader'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import Swal from 'sweetalert2'
import { signInAccount } from '../../service/authentication'
import Navigation from '../../components/navigation/Navigation'
import { useSelector,useDispatch } from 'react-redux'
import { setIsLogin } from '../../redux/isLoginSlice'
import axios from 'axios'

const SignIn = () => {
    const isLogin = useSelector((state) => state.isLogin.isLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        isLogin.status && navigate('/')
    }, [isLogin, navigate])

    const [account, setAccount] = useState({email:'', password:''})
    const [hide, setHide] = useState(true)
    
    const setEmail = (email) => {
        setAccount({...account, email:email.target.value})
    }

    const setPassword = (password) => {
        setAccount({...account, password:password.target.value})
    }

    const alertSuccess = (payload) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: payload,
            icon: 'success',
            confirmButtonText: 'ตกลง'
        })
        setAccount({email:'', password:''})
        axios.get(`${process.env.REACT_APP_API}/authentication-account`, { withCredentials: true })
        .then((response) => {
            dispatch(setIsLogin({status: response.data.status, payload: response.data.payload}))
        })
    }

    const alertError = (payload) => {
        Swal.fire({
            title: 'ล้มเหลว',
            text: payload,
            icon: 'error',
            confirmButtonText: 'ตกลง'
        })
    }

    const alertWarning = (payload) => {
        Swal.fire({
            title: 'คำเตือน',
            text: payload,
            icon: 'warning',
            confirmButtonText: 'ตกลง'
        })
    }

    const handleSignInAccount = (event) => {
        event.preventDefault()
        signInAccount(account, alertSuccess, alertError, alertWarning)
    }

    return(
        <>
        <MetaHeader title={`เข้าสู่ระบบ`} />
        <Navigation />
        <div className='container flex justify-center w-full h-full mx-auto mt-5'>
            <form onSubmit={handleSignInAccount} className={`p-10 rounded bg-[#33007B]`}>
                <div className='flex justify-center align-middle'>
                <Icon icon={"game-icons:minerals"} className='text-[#F000B8]' width={48} height={48} />
                <h4 className='text-5xl text-center text-[#FFFFFF]'>SHADOW</h4>
                </div>
                <h4 className='text-3xl text-center text-[#FFFFFF] mt-5'>ยินดีต้อนรับกลับ</h4>
                <div className='w-full max-w-xs mt-5 form-control'>
                    <input value={account.email} type={'text'} placeholder='อีเมล' className='input w-full max-w-xs bg-[#CACACA] text-[#000000]' onChange={setEmail}/>
                </div>
                <div className='w-full max-w-xs mt-5 form-control'>
                    <label className='input w-full max-w-xs bg-[#CACACA] text-[#000000] flex justify-between items-center gap-2'>
                        <input value={account.password} type={hide ? 'password' : 'text'} placeholder='รหัสผ่าน' onChange={setPassword}/>
                        <Icon icon={hide ? "mdi:hide" : "mdi:show"} className='text-[#000000]' width={24} height={24} onClick={() => setHide(!hide)}/>
                    </label>
                </div>
                <div className='flex justify-between mt-1 align-middle'>
                    <Link to='/sign-up' className='link text-[#3FC3EE] hover:text-[#46a5c4] flex'>
                        <span className='mr-1'>สมัครสมาชิก</span>
                        <Icon icon={"line-md:account-add"} className='text-[#3FC3EE] hover:text-[#46a5c4]' width={24} height={24} />
                    </Link>
                    <Link to='/forgot-password' className='link text-[#F27474] hover:text-[#ca6161]'>
                        ลืมรหัสผ่าน
                    </Link>
                </div>
                <div className='flex flex-col w-full border-opacity-50'>
                    <button className="btn border-none bg-[#A5DC86] hover:bg-[#86b36d] text-[#FFFFFF] w-full mt-5">เข้าสู่ระบบ</button>
                    <Link to='/' className="btn border-none bg-[#F27474] hover:bg-[#ca6161] text-[#FFFFFF] w-full mt-5">
                        กลับสู่หน้าหลัก
                    </Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default SignIn