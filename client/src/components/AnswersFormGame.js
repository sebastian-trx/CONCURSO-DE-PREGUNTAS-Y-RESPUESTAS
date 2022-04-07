import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {postQuestion} from "../actions/index"

export function AnswersFormGame() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    questionTitle: "",
    level: "",
    categoryId: "",
    answerOptions: [],
  });

  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });

  function handleChangeForm1(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeForm2(e) {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(()=>{
    let answerOptions = [
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false },
    ];
    answerOptions.map(
      (item, index) => (item.answer = answers[`answer${index + 1}`])
    );

    setInput({
      ...input,
      answerOptions: answerOptions,
    });

  },[answers])

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postQuestion(input))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Llena los campos</h4>
        <div>
          <input
            name="questionTitle"
            type="text"
            placeholder="titulo de la pregunta"
            value={input.questionTitle}
            onChange={handleChangeForm1}
          ></input>
        </div>
        <div>
          <input
            name="level"
            type="number"
            placeholder="nivel de dificultad"
            value={input.level}
            onChange={handleChangeForm1}
          ></input>
        </div>
        <div>
          <input
            name="categoryId"
            type="number"
            placeholder="Id de la categoría"
            value={input.categoryId}
            onChange={handleChangeForm1}
          ></input>
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="answer1"
            type="text"
            placeholder="respuesta correcta"
            value={answers.answer1}
            onChange={handleChangeForm2}
          ></input>
        </div>
        <div>
          <input
            name="answer2"
            type="text"
            placeholder="respuesta incorrecta"
            value={answers.answer2}
            onChange={handleChangeForm2}
          ></input>
        </div>
        <div>
          <input
            name="answer3"
            type="text"
            placeholder="respuesta incorrecta"
            value={answers.answer3}
            onChange={handleChangeForm2}
          ></input>
        </div>
        <div>
          <input
            name="answer4"
            type="text"
            placeholder="respuesta incorrecta"
            value={answers.answer4}
            onChange={handleChangeForm2}
          ></input>
        </div>
        <button>Ingresar pregunta</button>
      </form>
    </div>
  );
}
