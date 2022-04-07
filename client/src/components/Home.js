import styles from "./Home.module.css";
import {
  logout,
  getUserInfo,
  getQuestions,
  updateUserScore,
  randomQuestion,
} from "../actions/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const { userInfo } = useSelector((state) => state);
  const { randomQuestionByLevel } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getQuestions());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(randomQuestion(currentQuestion + 1));
    }, 500);
  }, [dispatch, currentQuestion]);

  if (userInfo?.login === true && userInfo?.admin === true) {
    navigate("/configurarJuego");
  } else if (userInfo?.login === false) {
    navigate("/ingresar");
  }

  useEffect(() => {
    if (currentQuestion === 5) {
      alert("Ganaste!, tu puntuación actual será añadida a tu historico");
      let newScore = currentScore + userInfo.score;
      let payload = { score: newScore, nickName: userInfo.nickName };
      dispatch(updateUserScore(payload));
      window.location.reload();
    }
  }, [
    currentQuestion,
    currentScore,
    dispatch,
    userInfo.nickName,
    userInfo.score,
  ]);

  function handleAnswer(correct) {
    if (correct) {
      setCurrentScore(currentScore + 1 * 3);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("perdiste, vuelve a intentarlo");
      window.location.reload();
    }
  }

  function handleLogout() {
    dispatch(logout());
    navigate("/ingresar");
  }

  function handleEndGame() {
    alert("te has retirado, tus puntos han sido acumulados");
    let newScore = currentScore + userInfo.score;
    let payload = { score: newScore, nickName: userInfo.nickName };
    dispatch(updateUserScore(payload));
    window.location.reload();
  }

  console.log(randomQuestionByLevel);

  return (
    <div className={styles.Home}>
      <div className={styles.informationContainer}>
        <div className={styles.informationGame}>
          <h3>Hola {userInfo?.nickName}</h3>
          <h3>Tu historico de puntuación: {userInfo?.score}</h3>
          <h3>Puntuación actual: {currentScore}</h3>
          <h3>Respuestas acertadas: {currentQuestion}</h3>
          <h3>Categoría: {randomQuestionByLevel?.category?.name}</h3>
          <h3>Nivel de dificultad: {randomQuestionByLevel?.level}</h3>
          <button onClick={handleEndGame}>
            Retirarme en la pregunta actual
          </button>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>

      <div className={styles.questionContainer}>
        <div className={styles.tituloQuestion}>
          {randomQuestionByLevel?.questionTitle}
        </div>
        <div className={styles.answerContainer}>
          {randomQuestionByLevel?.answerOptions?.map((item) => (
            <button
              key={item.answer}
              onClick={() => handleAnswer(item.correct)}
            >
              {item.answer}
            </button>
          ))}
        </div>
        ;
      </div>
    </div>
  );
}
