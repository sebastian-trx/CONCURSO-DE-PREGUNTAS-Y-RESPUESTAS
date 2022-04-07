import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { logout, getUserInfo } from "../actions/index";
import { AnswersFormGame } from "./AnswersFormGame";

export function SettingGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  if (userInfo?.admin !== true) {
    navigate("/ingresar");
  }

  function handleLogout() {
    dispatch(logout());
    navigate("/ingresar");
  }

  return (
    <>
      <h2> ruta para que el admin ingrese preguntas adicionales </h2>
      <AnswersFormGame/>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}
