import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {

  const URL = "https://api.whatsapp.com/send?phone=+573202349051&text=Hola,%20buen%20día."

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="Gaming" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button as="a" href={URL} target="_blank" circular color="green" icon="whatsapp" />
            <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" circular color="twitter" icon="twitter" />
            <Button as="a" href="#" circular color="youtube" icon="youtube" />
          </div>
        </div>

        <div className={styles.Copyright}>
          <Image src="/images/aunar.png" alt="Gaming" />
          <span>Copyright © 2023 Corporación Universitaria Autónoma de Nariño - All rights reserved</span>
        </div>
      </Container>
    </div>
  );
}
