import { createElement, ReactElement } from "react";
import styles from "./Footer.module.css";

export default function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return createElement(
    "footer",
    { className: styles.footer },

    createElement("h4", null, "Coffee App ☕"),
    createElement("p", null, "Fresh coffee. Cozy vibes."),
    createElement("p", null, "Open daily: 7AM - 8PM"),

    createElement(
      "small",
      { className: styles.year },
      `© ${year} — Coffee App`
    )
  );
}