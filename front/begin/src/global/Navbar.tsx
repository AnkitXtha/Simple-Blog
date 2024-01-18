
import { useEffect, useState } from "react";
import "./../styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutCall } from "../state/reducers/logout/logoutAction";
import { AppDispatch } from "../state";
import { Link, useNavigate } from "react-router-dom";
import { getBlogData } from "../state/reducers/blog/blogAction";
import { config } from "../config";
import { logout, userDetails } from "../state/reducers/login/loginSlice";

function Navbar(props: any) {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const user = config.USER_INFO.USER_DETAILS.userInfo;
    const {userInfo} = useSelector((state: any) => state.login)
    
    useEffect(() => {
        // dispatch(getLocalToken())
        dispatch(getBlogData())
        if(user){
        dispatch(userDetails(user))
        }
        
    }, [user])

    console.log('user',user);
    
    
    
    const logoutHandle = (e: any) => {
        e.preventDefault();
            dispatch(logout())
    }

    return (
        <>
            <div className="main-container">
                <nav className="navbar navbar-expand-lg" style={{ opacity: props.opacity, transition: "opacity .5s ease-in-out" }} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave}>
                    <div className="container logoSection">
                        <div className="logo">
                            <a className="navbar-brand" href="/" style={{ pointerEvents: props.opacity == 0 ? "none" : "auto" }}>
                                <img
                                    src="/NavLogo.png"
                                    alt="Logo"
                                    height="30"
                                />
                            </a>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="main-menu">
                            <div
                                className="container justify-content-end mainNav"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/" style={{ pointerEvents: props.opacity == 0 ? "none" : "auto" }}>
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/blog" style={{ pointerEvents: props.opacity == 0 ? "none" : "auto" }}>
                                            Blog
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        {userInfo ? <a className="nav-link" href="/profile" style={{ pointerEvents: props.opacity == 0 ? "none" : "auto" }}>
                                            Profile
                                        </a> : ""}
                                    </li>
                                    <li className="nav-item">
                                        {userInfo ? <a className="nav-link" href="#" onClick={logoutHandle} style={{ cursor: "pointer", pointerEvents: props.opacity == 0 ? "none" : "auto" }}>
                                            Logout
                                        </a>
                                        : <Link className="nav-link" to={"/login" }style={{ pointerEvents: props.opacity == 0 ? "none" : "auto" }}>
                                            Login
                                        </Link>
                                        }
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
