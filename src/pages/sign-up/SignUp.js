import { Link, useNavigate } from 'react-router-dom'
import MetaHeader from '../../components/meta-header/MetaHeader'
import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Icon } from '@iconify/react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { signUpAccount } from '../../service/authentication'
import Navigation from '../../components/navigation/Navigation'

const SignIn = () => {
    const isLogin = useSelector((state) => state.isLogin.isLogin)
    const navigate = useNavigate()

    useEffect(() => {
        isLogin.status && navigate('/')
    }, [isLogin, navigate])

    const atLeastOneUppercase = /[A-Z]/g
    const atLeastOneLowercase = /[a-z]/g
    const atLeastOneNumeric = /[0-9]/g
    const atLeastOneSpecialChar = /[#?!@$%^&*-]/g
    const eightCharsOrMore = /.{8,}/g
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

    const [passwordRequireMent, setPasswordRequireMent] = useState({minimumLength: false, alphabetLower: false, alphabetUpper: false, number: false, special: false})
    const [account, setAccount] = useState({username:'', email:'', password:'', confirmPassword:''})
    const [hide, setHide] = useState(true)
    const [hide2, setHide2] = useState(true)
    
    const setUsername = (username) => {
        setAccount({...account, username:username.target.value})
    }

    const setEmail = (email) => {
        setAccount({...account, email:email.target.value})
    }

    const setPassword = (password) => {
        setAccount({...account, password:password.target.value})
        setPasswordRequireMent({
            minimumLength: password.target.value.match(eightCharsOrMore),
            alphabetLower: password.target.value.match(atLeastOneLowercase),
            alphabetUpper: password.target.value.match(atLeastOneUppercase),
            number: password.target.value.match(atLeastOneNumeric),
            special: password.target.value.match(atLeastOneSpecialChar)
        })
    }

    const setConfirmPassword = (confirmPassword) => {
        setAccount({...account, confirmPassword:confirmPassword.target.value})
    }

    const alertSuccess = (payload) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: payload,
            icon: 'success',
            confirmButtonText: 'ตกลง'
        })
        setAccount({userName:'', email:'', password:'', confirmPassword:''})
        setPasswordRequireMent({minimumLength: false, alphabetLower: false, alphabetUpper: false, number: false, special: false})
        navigate('/sign-in')
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

    const createAccount = (event) => {
        event.preventDefault()
        if(account.username.length <= 0 || account.email.length <= 0 || account.password.length <= 0 || account.confirmPassword.length <= 0){
            alertWarning((account.username.length <= 0) ? 'กรุณากรอกชื่อผู้ใช้' : (account.email.length <= 0) ? 'กรุณากรอกอีเมล' : (account.password.length <= 0) ? 'กรุณากรอกรหัสผ่าน' : (account.confirmPassword.length <= 0) && 'กรุณายืนยันรหัสผ่าน')
        }else if(!account.email.match(emailRegex)){
            alertWarning('กรุณากรอกรูปแบบอีเมลให้ถูกต้อง')
          }else if(!passwordRequireMent.minimumLength || !passwordRequireMent.alphabetLower || !passwordRequireMent.alphabetUpper || !passwordRequireMent.number || !passwordRequireMent.special){
            alertWarning((!passwordRequireMent.minimumLength) ? 
            'ต้องการความยาวรหัสผ่านอย่างน้อย 8 ตัว' : 
            (!passwordRequireMent.alphabetLower) ? 
            'ต้องการตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว' : 
            (!passwordRequireMent.alphabetUpper) ? 
            'ต้องการตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว' : 
            (!passwordRequireMent.number) ? 
            'ต้องการตัวเลขอย่างน้อย 1 ตัว' : 
            (!passwordRequireMent.special) && 
            'ต้องการตัวอักษรพิเศษอย่างน้อย 1 ตัว')
          }else if(account.password !== account.confirmPassword){
            alertWarning('กรุณากรอกรหัสผ่าน และ ยืนยันรหัสผ่านให้ตรงกัน')
          }else{
            axios.post(`${process.env.REACT_APP_API}/sign-up-validation`, account)
            .then((response) => {
                if(response.data.status){
                    signUpAccount(account, alertSuccess, alertError, alertWarning)
                }else{
                    alertWarning(response.data.payload)
                }
            })
            .catch((error) => {
                alertError('เกิดข้อผิดพลาดที่ไม่รู้จัก')
            })
          }
    }

    return(
        <>
        <MetaHeader title={`สร้างบัญชี`} />
        <Navigation/>
        <div className='container flex justify-center w-full h-full mx-auto mt-5'>
            <form onSubmit={createAccount} className={`p-10 rounded bg-[#33007B]`}>
                <div className='flex justify-center align-middle'>
                <Icon icon={"game-icons:minerals"} className='text-[#F000B8]' width={48} height={48} />
                <h4 className='text-5xl text-center text-[#FFFFFF]'>SHADOW</h4>
                </div>
                <h4 className='text-3xl text-center text-[#FFFFFF] mt-5'>ยินดีต้อนรับสู่ระบบ</h4>
                <div className='w-full max-w-xs mt-5 form-control'>
                    <input value={account.username} type={'text'} placeholder='ชื่อผู้ใช้' className='input w-full max-w-xs bg-[#CACACA] text-[#000000]' onChange={setUsername}/>
                </div>
                <div className='w-full max-w-xs mt-5 form-control'>
                    <input value={account.email} type={'text'} placeholder='อีเมล' className='input w-full max-w-xs bg-[#CACACA] text-[#000000]' onChange={setEmail}/>
                </div>
                <div className='w-full max-w-xs mt-5 form-control'>
                    <label className='input w-full max-w-xs bg-[#CACACA] text-[#000000] flex justify-between items-center gap-2'>
                        <input value={account.password} type={hide ? 'password' : 'text'} placeholder='รหัสผ่าน' onChange={setPassword}/>
                        <Icon icon={hide ? "mdi:hide" : "mdi:show"} className='text-[#000000]' width={24} height={24} onClick={() => setHide(!hide)}/>
                    </label>
                </div>
                <div className='w-full max-w-xs mt-5 form-control'>
                    <label className='input w-full max-w-xs bg-[#CACACA] text-[#000000] flex justify-between items-center gap-2'>
                        <input value={account.confirmPassword} type={hide2 ? 'password' : 'text'} placeholder='ยืนยันรหัสผ่าน' onChange={setConfirmPassword}/>
                        <Icon icon={hide2 ? "mdi:hide" : "mdi:show"} className='text-[#000000]' width={24} height={24} onClick={() => setHide2(!hide2)}/>
                    </label>
                </div>
                <div className='flex justify-end mt-1 align-middle'>
                    <Link to='/sign-in' className='link text-[#A5DC86] hover:text-[#86b36d]'>
                        ไปหน้าเข้าสู่ระบบ
                    </Link>
                </div>
                <div className='w-full max-w-xs mt-5 form-control'>
                    <p className='text-[#FFFFFF]'>ความต้องการของรหัสผ่าน:</p>
                    <ul>
                        <li className={`${passwordRequireMent.minimumLength ? 'text-success' : 'text-error'}`}>* ความยาวรหัสผ่านอย่างน้อย 8 ตัว</li>
                        <li className={`${passwordRequireMent.alphabetLower ? 'text-success' : 'text-error'}`}>* มีตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว</li>
                        <li className={`${passwordRequireMent.alphabetUpper ? 'text-success' : 'text-error'}`}>* มีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว</li>
                        <li className={`${passwordRequireMent.number ? 'text-success' : 'text-error'}`}>* มีตัวเลขอย่างน้อย 1 ตัว</li>
                        <li className={`${passwordRequireMent.special ? 'text-success' : 'text-error'}`}>* มีเครื่องหมายพิเศษ เช่น #?!@$%^&*- อย่างน้อย 1 ตัว</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center w-full align-middle border-opacity-50'>
                    <button type='submit' className="btn border-none bg-[#3FC3EE] hover:bg-[#46a5c4] text-[#FFFFFF] w-full mt-5">สร้างบัญชี</button>
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