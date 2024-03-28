import Link from "next/link";
import styles from "./empresa.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <section className={styles.containerContent}>
          <div className={styles.containertexto}>
            <h2 className={styles.titulo}>PUBLINET</h2>
            <p>
              Publinet S.A., cuenta con
              <strong>
                {" "}
                21 años de experiencia en el mercado publicitario chileno
              </strong>
              , fue fundada en Marzo del año 1997.
            </p>
            <p>
              La empresa ha tenido un importante desarrollo y crecimiento en el
              país, y hoy participa en cinco divisiones de negocios de Vía
              Pública.
            </p>
            <ul>
              <li>Monumental</li>
              <li>Top Site</li>
              <li>Buses</li>
              <li>Mobiliario Urbano</li>
              <li>Pantallas Digitales</li>
            </ul>
            <p>
              Sus actuales socios, Alejandro Gormaz y Jack Sabaj, tienen más de
              25 años de experiencia en el mercado de la Publicidad Exterior
              tanto en Chile como en Brasil, Uruguay, Argentina y México,
              llegando a formar el grupo IOA International Outdoor Advertising
              que se transformó en la principal empresa de Publicidad Exterior
              de Latinoamérica.
            </p>
            <p>
              Todo el conocimiento adquirido a través de los años lo han volcado
              en beneficio del desarrollo y crecimiento de Publinet que hoy ya
              es un actor importante en el mercado chileno y, que continuará en
              expansión en beneficio de entregar cada día un mejor servicio a
              sus clientes.
            </p>
            <p>
              Publinet cuenta con concesiones municipales y contratos privados,
              que se traducen en más de 1.200 soportes publicitarios a lo largo
              del país.
            </p>
            <p>
              Nuestra política comercial está enfocada en adaptarnos a cada
              necesidad comunicacional de nuestros clientes, con la mayor
              flexibilidad y siempre con un servicio de alta calidad en todos
              los procesos.
            </p>
            <p>
              Trabajamos con Circuitos de Cobertura Selectiva, Masiva y Total,
              según sea el requerimiento del cliente. Todos ellos configurados
              de manera tal que entreguen los mejores índices de Cobertura,
              Alcance y Frecuencia.
            </p>
          </div>
        </section>

        <aside className={styles.containerAside}>
          <div className={styles.block}>
            <div className={styles.asideTitulo}>publinet</div>
            <div className={styles.blockContent}>
              <ol id={styles.blockuOl}>
                <Link href="/empresa">
                  <li className={styles.l1}>
                    <strong>
                      {" "}
                      <ArrowForwardIosIcon sx={{ fontSize: 13 }} /> Quiénes
                      somos
                    </strong>
                  </li>
                </Link>
                <Link href="/soportes">
                  <li className={styles.l2}>
                    {" "}
                    <ArrowForwardIosIcon sx={{ fontSize: 13 }} /> Soportes{" "}
                  </li>
                </Link>
                <Link href="/contacto">
                  <li className={styles.l3}>
                    {" "}
                    <ArrowForwardIosIcon sx={{ fontSize: 13 }} /> Contacto{" "}
                  </li>
                </Link>
              </ol>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default page;
