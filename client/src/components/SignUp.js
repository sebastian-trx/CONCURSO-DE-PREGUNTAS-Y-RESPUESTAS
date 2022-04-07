import {SignUpForm} from "./SignUpForm"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../actions";


export function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state);
  
    useEffect(() => {
      dispatch(getUserInfo());
    }, [dispatch]);
  
  console.log(userInfo);

    if(userInfo?.login === true && userInfo?.admin === true){
      navigate("/configurarJuego")
    }else if (userInfo?.login === true) {
      navigate("/");
    }
    return(
        <>
           <SignUpForm/>
        </>
    )
}