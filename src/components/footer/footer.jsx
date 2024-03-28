import React from "react";
import Image from "next/image";
import style from "./footer.module.css";
import Link from "next/link";
import LogoFooter from "../../../public/footer/logoFooter.png";
import ArticleIcon from "@mui/icons-material/Article";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";

function footer() {
  return (
    <footer className={style.footer}>
      <div className={style.containerInformacion}>
        <div>
          <div className={style.containerInteres}>
            <h4 className={style.seccionH4Footer}>INFORMACIÓN DE INTERES</h4>
            <ul>
              <Link href={"/empresa"}>
                <li>
                  <ArticleIcon className={style.MuiSvgIcon} />
                  <span className={style.hoverFooter}>Quiénes somos</span>
                </li>
              </Link>
              <Link href={"/soportes"}>
                <li>
                  <ContactSupportIcon className={style.MuiSvgIcon} />
                  <span className={style.hoverFooter}>Soportes</span>
                </li>
              </Link>
              <li>
                <ContactMailIcon className={style.MuiSvgIcon} />
                <Link href="/contacto" className={style.hoverFooter}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={style.containerContacto}>
            <h4 className={style.seccionH4Footer}>CONTACTO</h4>
            <ul>
              <li>
                <address>
                  <PlaceIcon className={style.MuiSvgIcon} />
                  <span>
                    Augusta Gerona 1577, Edificio Aube, of. 503 - Las Condes /
                    Santiago de Chile
                  </span>
                </address>
              </li>
              <li>
                {" "}
                <LocalPhoneIcon className={style.MuiSvgIcon} />{" "}
                <span>(+56-2) 2 9541994</span>
              </li>
              <li>
                <TelegramIcon className={style.MuiSvgIcon} />
                <a
                  href="mailto:  contacto@publinetchile.cl"
                  className={style.hoverFooter}
                >
                  contacto@publinetchile.cl
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.contenedorImage}>
          <Image
            src={LogoFooter}
            alt="Logo footer publinet"
            loading="eager"
          ></Image>
        </div>
      </div>
      <div className={style.BottomFooter}>© 2024 developersUy</div>
    </footer>
  );
}

export default footer;
