import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp, localLogin } from '../actions/index'

export function SignUpForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
      nickName: "",
      password: "",
    });
  
    const [errors, setErrors] = useState({});
  
    function validate(input) {
      let errors = {};
      if (!input.nickName) {
        errors.nickName = "Ingresa tu nickname";
      } else if (!input.password) {
        errors.password = "Ingrese su contraseña.";
      }
      else if (Object.entries(errors).length === 0){
          errors.boton = <button type="submit">entrar</button>
        }
      return errors;
    }
  
    function handleChange(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
  
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signUp(input));
        setTimeout(() => {
          dispatch(localLogin(input));
          navigate("/");
        }, 200);
      }

      return (
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <h4>Registrate</h4>
              <div>
                <input
                  name="nickName"
                  type="text"
                  placeholder="nickname"
                  value={input.nickName}
                  onChange={handleChange}
                ></input>
              </div>
              <div>{errors.nickName && <p>{errors.nickName}</p>}</div>
    
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  value={input.password}
                  onChange={handleChange}
                ></input>
              </div>
              <div>{errors.password && <p>{errors.password}</p>}</div>
    
              {errors.boton}
            </form>
    
            <h5> ¿Ya tienes cuenta?</h5>
            <Link to="/ingresar">
              <button> Incia sesión aquí</button>
            </Link>
          </div>
        </div>
      );
}



