"use client";
import styles from "./slider.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

function BasicCard({ item, index }) {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          width: "100%",
          margin: "15px",
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        <CardActionArea>
          <div className={styles.title}>{item.title}</div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              maxHeight: "100vw",
            }}
          >
            <Image
              src={item.img}
              alt={`banner-${index}`}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
              priority
            />
          </div>
          <div className={styles.contentText}>
            <p className={styles.text}>{item.text}</p>
          </div>
        </CardActionArea>
      </Card>
    </>
  );
}

function slider({ stepsslider }) {
  return (
    <div style={{ height: "800px", minHeight: "800px" }}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1500,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1500,
              min: 985,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 985,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {stepsslider.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              position: "relative",
              width: "500px",
              maxWidth: "100vw",
              margin: "auto",
            }}
          >
            <BasicCard key={index} item={item} index={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default slider;
