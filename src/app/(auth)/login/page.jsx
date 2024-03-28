import styles from "./login.module.css";
import Link from "next/link";

const page = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.title}>
            <h2>Iniciar sesion</h2>
          </div>

          <div className={styles.column}>
            <div className={styles.content}>
              {/*formulario*/}
              <form action="" method="post">
                <div className={styles.inputWraper}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    title="Email Address"
                    className={styles.inputText}
                    required
                    id="email"
                    name="email"
                  />

                  <div className={styles.passwordWrapper}>
                    <label htmlFor="pass">Contraseña</label>
                    <input
                      type="password"
                      title="Password"
                      className={styles.inputText}
                      required
                      id="pass"
                      name="password"
                    />
                  </div>
                </div>

                <button
                  id="send2"
                  name="send"
                  type="submit"
                  className={styles.button}
                >
                  Iniciar sesion
                </button>
              </form>
              {/*end Formulario*/}
              
              <div className={styles.forgotpassword}>
                <Link href="/forgotPassword">Olvidaste tu Contraseña?</Link>
              </div>

              <div className={styles.register}>
                <span>No tienes una cuenta ?</span> {"  "}
                <Link href="/register">Regístrate</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
