import { createElement, ReactElement } from "react";
import styles from "./Footer.module.css";

export default function Footer(): ReactElement {
  const year = new Date().getFullYear();
  return createElement(
    "footer",
    { className: styles.footer },
    createElement("small", null, `© ${year} — Coffee App`)
  );
}