"use client";
import styles from "./page.module.css";
import img1 from "../../public/banner/carousel/1.jpg";
import img2 from "../../public/banner/carousel/2.jpg";
import img3 from "../../public/banner/carousel/3.jpg";

import slider1 from "../../public/banner/soporte/1.jpg";
import slider2 from "../../public/banner/soporte/2.jpg";
import slider3 from "../../public/banner/soporte/3.jpg";
import slider4 from "../../public/banner/soporte/4.jpg";
import slider5 from "../../public/banner/soporte/5.jpg";

import proyects from "../../public/banner/proyects/data";

import Carousel from "../components/banner/Carousel";
import Slider from "@/components/banner/Slider";
import Proyects from "@/components/proyects/Proyects";
import About from "@/components/About/About";
import Monitoring from "@/components/Monitoring/Monitoring";

const steps = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
];

const stepsslider = [
  {
    img: slider1,
    title: "LUNETAS",
    text: "Son un soporte ideal para complementar campañas y lograr ampliar cobertura, ya que trasladan el mensaje por toda la ciudad. De esta manera logramos que nuestro GO sea impactado con la campaña en distintos puntos.",
  },
  {
    img: slider2,
    title: "MONUMENTAL",
    text: "Letrero publicitario de gran formato ubicado principalmente en autopistas, carreteras y grandes avenidas de las ciudades. Ideal para campañas de impacto visual por su gran tamaño, generando recordación de marca.",
  },
  {
    img: slider3,
    title: "MOBILIARIO",
    text: "Posee una amplia cobertura, abarcando las principales avenida y calles del centro de Concepción. De gran impacto visual para peatones y conductores. Este soporte es ideal para campañas de lanzamiento y promociones.",
  },
  {
    img: slider4,
    title: "PANTALLAS DIGITALES",
    text: "Presentan un gran dinamismo, esto permite un rápido cambio de tema dependiendo de las necesidades comunicacionales de la campaña (lanzamiento de productos, ofertas) Cercano a puntos de interés tales como: supermercados, mall, centros comerciales, colegios, entre otros.",
  },
  {
    img: slider5,
    title: "TOPSITE",
    text: "Sus diversos formatos permiten utilizar campañas de alta creatividad, dirigida a distintos segmentos, impactando tanto a conductores como peatones, con gran frecuencia y segmentación de acuerdo a los objetivos de la campaña.",
  },
];

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Carousel steps={steps} />

        <div className={styles.contentTitle}>
          <div className={styles.content}>
            <div className={styles.line} />
            <h1 className={styles.h1}>soportes</h1>
          </div>
          <Slider stepsslider={stepsslider} />
          <Proyects items={proyects} />
          <About />
          <Monitoring />
        </div>
      </div>
    </>
  );
}
