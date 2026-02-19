//Components/Main.tsx

"use client";

import { createElement, ReactElement, useState } from "react";
import styles from "./Main.module.css";

export default function Main(): ReactElement {
  const [shots, setShots] = useState<number>(0);

  return createElement(
    "main",
    { className: styles.main, id: "home" },
    createElement("h2", null, "Bienvenue dans Coffee App"),
    createElement("p", null, "Ceci est la zone ", createElement("strong", null, "Main"), " de l'application."),
    createElement(
      "button",
      { className: styles.btn, onClick: () => setShots((s) => s + 1) },
      "Shots d’espresso tirés : ",
      String(shots)
    ),
    createElement(
      "section",
      { className: styles.card, id: "about" },
      createElement("h3", null, "about"),
      createElement(
        "ul",
        null,
        createElement("li", null, "Parent : Page"),
        createElement("li", null, "Enfants : Header, Main, Footer"),
        createElement("li", null, " Type Coffee")
      )
    ),
    createElement(
      "section",
      { className: styles.card, id: "contact" },
      createElement("h3", null, "Contact"),
      createElement("p", null, " List Clients.")
    ),

      createElement(
      "section",
      { className: styles.card, id: "Services" },
      createElement("h3", null, "Services"),
      createElement("p", null, "Price Coffee.")
    )
  );
}
