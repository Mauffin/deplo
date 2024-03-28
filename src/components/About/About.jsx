import styles from "./about.module.css";
import Image from "next/image";
import img from "../../../public/banner/Publinetesdata.png";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.item}>
          <Image
            src={img}
            alt={`publinetesdata`}
            sizes="100vw"
            style={{
              width: "80%",
              maxWidth: "60vw",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
        <div className={styles.item}>
          <div className={styles.list}>
            <div className={styles.listItem}>
              Nuestro sistema permite medir planificar y optimizar pautas de
              publicidad exterior. Herramientas que incluyen información
              referente a censos georreferenciados, hábitos de traslados,
              software de administración comercial.
            </div>
            <div className={styles.listItem}>
              Monitoreo online de contactos de cada ubicación, pudiendo así
              diseñar circuitos basados en el alcance, las métricas y la
              cobertura que entrega cada uno.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
