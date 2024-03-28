import styles from "./proyect.module.css";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

function CardItem({ item, index }) {
  return (
    <Card sx={{ maxWidth: "100%", padding: "0px" }}>
      <Image
        src={item.img}
        alt={`proyecto-${index}`}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={640}
        height={280}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {item.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Proyects({ items }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {items.map((item, index) => (
          <div key={`proyecto-${index}`} className={styles.item}>
            <CardItem item={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyects;
