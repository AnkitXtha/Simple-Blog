import { useEffect, useState } from 'react'
import "./../styles/Login.css";
import { useDispatch, useSelector } from 'react-redux';
import { signUpCall } from '../state/reducers/signup/signUpAction';
import { AppDispatch } from '../state';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { loginCall } from '../state/reducers/login/loginAction';

function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [viewPass, setViewPass] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const {loading} = useSelector((state:any) => state.login)
  const {_loading} = useSelector((state:any) => state.signup)

  const signUpHandle = (e: any) => {
    e.preventDefault();
    let signUpCredentials = {
      name,
      email,
      nickname,
      password,
      confirmPassword
    }
    dispatch(signUpCall(signUpCredentials))
      .then((response: any) => {
        setName('')
        setEmail('')
        setNickName('')
        setPassword('')
        setConfirmPassword('')
        console.log(response);
        
        if (response.payload.errors) {
          Object.keys(response.payload.errors).map(key => (
            toast.error(response.payload.errors[key][0], {
              autoClose: 3000,
              pauseOnHover: false,
              })
          ))
        } else {
          toast.success(response.payload.message, {
            autoClose: 3000,
            pauseOnHover: false,
            })
        }
      })

  }

  const loginHandle = (e: any) => {
    e.preventDefault()
    let loginCredentials = {
      email,
      password,
    }
    dispatch(loginCall(loginCredentials)).then((response: any) => {
      console.log("responseee",response);
      
      setEmail('')
      setPassword('')
      if (response.payload.error) {
          toast.error(response.payload.error, {
            autoClose: 3000,
            pauseOnHover: false,
            })
      }else{
        navigate('/')
      }
    })
  }

  useEffect(() => {
    let initialUser = localStorage.getItem("user")
    if(initialUser){
      navigate('/')
    }
  })


  return (
    <div id="container">

      <div id="cover">

        <h1 className="sign-up">Hello, Friend!</h1>
        <p className="sign-up">Enter your personal details<br /> and start a journey with us</p>
        <a className="button sign-up" href="#cover" style={loading == true? {pointerEvents: "none"} : {pointerEvents: "auto"}}>Sign Up</a>

        <h1 className="sign-in">Welcome Back!</h1>
        <p className="sign-in">To keep connected with us please<br /> login with your personal info</p>
        <br />
        <a className="button sub sign-in" href="#">Sign In</a>
      </div>

      <div id="login">
        <h1>Sign In</h1>
        {/* <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png" /></a>
        <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png" /></a>
        <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png" /></a>
        <p>or use your email account:</p> */}
        <form method='post'>
          <input value={email} type="email" placeholder="Email" autoComplete="off" onChange={(e: any) => setEmail(e.target.value)} /><br />
          <input value={password} type={viewPass == true? "text" : "password"} placeholder="Password" autoComplete="off" onChange={(e: any) => setPassword(e.target.value)} /><br />
          {/* <a id="forgot-pass" href="#">Forgot your password?</a><br /> */}
          <input type="hidden" name="_token" />
          <input type="checkbox" checked={viewPass} onChange={(e: any) => setViewPass(e.target.checked)} name="viewPass" id="viewPass" />
          <label htmlFor="viewPass" style={{ marginLeft: "5px" }}>View Password</label><br />
          <input className="submit-btn" type="submit" value={loading == false ? "Sign In" : "Signing in..."} onClick={loginHandle} /><br /><br />
      <Link to={'/'} style={loading == true? {pointerEvents: "none"} : {pointerEvents: "auto"}}>Go Home</Link>

        </form>
      </div>

      <div id="register">
        <h1>Create Account</h1>
        {/* <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png" /></a>
        <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png" /></a>
        <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png" /></a>
        <p>or use your email for registration:</p> */}
        <form method='post'>
          <input value={name} type="text" placeholder="Name" autoComplete="off" onChange={(e: any) => setName(e.target.value)} /><br />
          <input value={nickname} type="text" placeholder="Nickname" autoComplete="off" onChange={(e: any) => setNickName(e.target.value)} /><br />
          <input value={email} type="email" placeholder="Email" autoComplete="off" onChange={(e: any) => setEmail(e.target.value)} /><br />
          <input value={password} type="password" placeholder="Password" autoComplete="off" onChange={(e: any) => setPassword(e.target.value)} /><br />
          <input value={confirmPassword} type="password" placeholder="Confirm Password" autoComplete="off" onChange={(e: any) => setConfirmPassword(e.target.value)} /><br />
          <input className="submit-btn" type="submit" value={_loading == false? "Sign up" : "Signing Up"} onClick={signUpHandle} />
        </form>
      </div>

    </div>
  )
}

export default Login
