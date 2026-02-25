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
    createElement("p", null, "Ceci est la zone ", createElement("strong", null, "Main"), " de l'application.")
    
  )
}