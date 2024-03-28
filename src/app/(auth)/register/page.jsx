import React from "react";
import style from "./register.module.css";

function page() {
  return (
    <div className={style.contenedorPrincipal}>
      <div className={style.contenedorForm}>
        <form action="" method="post">
          <div className={style.containerTituloForm}>
            <h1 className={style.Titulo}>CREAR CUENTA</h1>
          </div>
          <div className={style.containerCuerpoForm}>
            <div className={style.containerColumna}>
              <label className={style.textRegister} htmlFor="nombre">
                NOMBRE
              </label>
              <input className={style.inputStyle} type="text" />
            </div>
            <div className={style.containerColumna}>
              <label className={style.textRegister} htmlFor="apellido">
                APELLIDO
              </label>
              <input className={style.inputStyle} type="text" />
            </div>
            <div className={style.containerColumna}>
              <label className={style.textRegister} htmlFor="empresa">
                EMPRESA
              </label>
              <input className={style.inputStyle} type="text" />
            </div>
            <div className={style.containerColumna}>
              <label className={style.textRegister} htmlFor="email">
                EMAIL
              </label>
              <input className={style.inputStyle} type="text" />
            </div>
            <div className={style.containerColumna}>
              <label className={style.textRegister} htmlFor="contraseña">
                CONTRASEÑA
              </label>
              <input className={style.inputStyle} type="password" />
            </div>
            <div className={style.containerColumna}>
              <label
                className={style.textRegister}
                htmlFor="confirmarContraseña"
              >
                CONFIRMAR CONTRASEÑA
              </label>
              <input className={style.inputStyle} type="password" />
              <div className={style.containerBttn}>
                <button className={style.bttCrearCuenta} type="submit">
                  CREAR CUENTA
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
