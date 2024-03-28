import styles from "./monitoring.module.css";
import Image from "next/image";
import img from "../../../public/banner/capa4.png";

function Monitoring() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.item}>
          <Image
            src={img}
            alt={`publinetesdata`}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
          <p className={styles.p}>
            Monitoreo online de contactos de cada ubicación, pudiendo asi
            diseñar circuitos basados en el alcance, las métricas y la cobertura
            que entrega cada uno.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Monitoring;
