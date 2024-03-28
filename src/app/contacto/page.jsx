import React from "react";
import style from "./contacto.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <div className={style.contenedorContacto}>
      <div className={style.contenedorForm}>
        <form action="" method="post">
          <h1 className={style.tituloForm}>CONTACTO</h1>
          <div className={style.contNombreCorreo}>
            <div className={style.contColumna}>
              <label className={style.StyleTextForm} htmlFor="nombre">
                NOMBRE <small className={style.requerido}>*</small>
              </label>
              <input className={style.inputStyle} required type="text" />
            </div>
            <div className={style.contColumna}>
              <label className={style.StyleTextForm} htmlFor="correo">
                CORREO <small className={style.requerido}>*</small>
              </label>
              <input className={style.inputStyle} required type="text" />
            </div>
          </div>
          <div className={style.contColumnaTelefono}>
            <label className={style.StyleTextForm} htmlFor="telefono">
              TELÉFONO <small className={style.requerido}>*</small>
            </label>
            <input className={style.inputStyle} required type="text" />
          </div>
          <div className={style.contColumnaMensaje}>
            <label className={style.StyleTextForm} htmlFor="mensaje">
              MENSAJE <small className={style.requerido}>*</small>
            </label>
            <textarea
              name="comment"
              id="comment"
              className={style.comment}
              required
              cols="5"
              rows="10"
            ></textarea>
          </div>
          <div className={style.contBtt}>
            <p className={style.campoObligatorio}>
              Campos Obligatorios
              <small className={style.requerido}>*</small>
            </p>
            <button className={style.bttContacto} type="submit">
              ENVIAR
            </button>
          </div>
        </form>
      </div>

      <div className={style.contenedorInformacion}>
        <div className={style.titleSide}>
          <h3 className={style.Title}>PUBLINET</h3>
        </div>
        <div className={style.listaInformacion}>
          <ul>
            <Link href={"/empresa"}>
              <li className={style.listaLi}>
                <ArrowForwardIosIcon sx={{ fontSize: 13 }} /> Quiénes Somos
              </li>
            </Link>
            <Link href={"/soportes"}>
              <li className={style.listaLi}>
                <ArrowForwardIosIcon sx={{ fontSize: 13 }} /> Soportes
              </li>
            </Link>
            <li className={style.listaLi}>
              <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
              <strong> Contacto </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default page;
