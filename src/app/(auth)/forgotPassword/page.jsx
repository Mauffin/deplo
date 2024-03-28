import React from "react";
import styles from "./forgotPass.module.css";

const page = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.title}>
            <h2>Solicitar Nueva Contraseña</h2>
          </div>

          <div className={styles.columnInput}>
            <div className={styles.columContent}>
              {/*formulario*/}
              <form action="" method="post">
                <div className={styles.inputWrapper}>
                  <label for="email">E-mail</label>
                  <input
                    type="email"
                    title="Email Address"
                    className={styles.inputText}
                    required
                    id="login_email"
                    name="login_email"
                  />
                  <div className={styles.button}>
                    <button id="" name="" type="submit">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
              {/*End formulario */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
