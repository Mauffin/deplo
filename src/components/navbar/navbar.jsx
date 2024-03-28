"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/navbar/logo-web.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "../../components/Search/Search";
import CloseIcon from '@mui/icons-material/Close';



const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>

      <nav className={styles.nav}>
        <div className={styles.Logo}>
          <Link href="/">
            <Image src={Logo} id="image" alt="Logo"  loading="eager" priority  />
          </Link>
        </div>

        <div className={styles.div2}>
          <ul>
            <Link href="/empresa">
              <li>EMPRESA</li>
            </Link>
            <Link href="/soporte">
              <li>SOPORTES</li>
            </Link>
            <Link href="/galeria">
              <li>GALERIA</li>
            </Link>
            <Link href="/contacto">
              <li>CONTACTANOS</li>
            </Link>
          </ul>
        </div>

        <div className={styles.div3}>
          <span>
            <Search />
            <Link href="/login">
              <AccountCircleIcon className={styles.iconLogin} fontSize="large" />
              <p>iniciar sesion</p>
            </Link>
          </span>

          <div
            className={`hamburger ${styles.hamburger}  ${isOpen ? styles.open : ""}`}
            onClick={handlerClick}
          >
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
        
          <div className={styles.sidebar}>
          <button className={styles.closeButton} onClick={handleCloseSidebar}><CloseIcon sx={{ color:"F07C27" }} /></button>
            <ul>
              <Link href="/empresa">
                <li onClick={handleCloseSidebar}>EMPRESA</li>
              </Link>
              <Link href="/soporte">
                <li onClick={handleCloseSidebar}>SOPORTES</li>
              </Link>
              <Link href="/galeria">
                <li onClick={handleCloseSidebar}>GALERIA</li>
              </Link>
              <Link href="/contacto">
                <li onClick={handleCloseSidebar}>CONTACTANOS</li>
              </Link>
              <Link href="/login">
                <li onClick={handleCloseSidebar}>INICIAR SESION</li>
              </Link>
            </ul>
          </div>
          <div className={styles.overlay} onClick={handleCloseSidebar}></div>
        </>
      )}

    </>
  );
};
export default navbar;
