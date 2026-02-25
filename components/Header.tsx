"use client"

import { useRef, useState, useEffect, createElement, ReactElement } from "react";
import styles from "./Header.module.css";

export default function Header(): ReactElement {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutBtnRef = useRef<HTMLButtonElement | null>(null);
  const aboutMenuRef = useRef<HTMLUListElement | null>(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const t = e.target as Node;
      if (
        isAboutOpen &&
        aboutBtnRef.current &&
        aboutMenuRef.current &&
        !aboutBtnRef.current.contains(t) &&
        !aboutMenuRef.current.contains(t)
      ) {
        setIsAboutOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isAboutOpen]);

  const toggleAbout = () => setIsAboutOpen((v) => !v);

  // Optionnel : fermer via ESC quand le focus est dans le menu
  const onAboutKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsAboutOpen(false);
      aboutBtnRef.current?.focus();
    }
  };

  return createElement(
    "header",
    { className: styles.header },
    createElement("h1", { className: styles.title }, "Welcome to HAES Coffee ☕"),

    // NAV
    createElement(
      "nav",
      { className: styles.nav },

      // Home
      createElement("a", { href: "#home", className: styles.link }, "Home"),

      // === ABOUT (bouton + dropdown) ===
      createElement(
        "div",
        { className: styles.dropdown },
        // Bouton qui ouvre/ferme
        createElement(
          "button",
          {
            ref: aboutBtnRef,
            className: styles.dropbtn,
            "aria-haspopup": "true",
            "aria-expanded": isAboutOpen,
            "aria-controls": "about-menu",
            onClick: toggleAbout,
          } as any,
          "About"
        ),
        // Liste affichée uniquement si isAboutOpen === true
        isAboutOpen &&
          createElement(
            "ul",
            {
              ref: aboutMenuRef,
              id: "about-menu",
              role: "menu",
              className: styles.menuList,
              onKeyDown: onAboutKeyDown,
            } as any,
            createElement(
              "li",
              { role: "none" },
              createElement("a", { role: "menuitem", href: "#story" }, "Story")
            ),
            createElement(
              "li",
              { role: "none" },
              createElement("a", { role: "menuitem", href: "#team" }, "Team")
            ),
            createElement(
              "li",
              { role: "none" },
              createElement("a", { role: "menuitem", href: "#careers" }, "Careers")
            )
          )
      ),


 // === SERVICES (bouton + dropdown) ===
      createElement(
        "div",
        { className: styles.dropdown },
        // Bouton qui ouvre/ferme
        createElement(
          "button",
          {
            ref: aboutBtnRef,
            className: styles.dropbtn,
            "aria-haspopup": "true",
            "aria-expanded": isAboutOpen,
            "aria-controls": "Services-menu",
            onClick: toggleAbout,
          } as any,
          "Services"
        ),
        // Liste affichée uniquement si isAboutOpen === true
        isAboutOpen &&
          createElement(
            "ul",
            {
              ref: aboutMenuRef,
              id: "Services-menu",
              role: "menu",
              className: styles.menuList,
              onKeyDown: onAboutKeyDown,
            } as any,
            createElement(
              "li",
              { role: "none" },
              createElement("a", { role: "menuitem", href: "#Coffee" }, "Story Coffee")
            ),
            createElement(
              "li",
              { role: "none" },
              createElement("a", { role: "menuitem", href: "#Finances" }, "Finances")
            ),
            createElement(
              "li",
              { role: "none" },
              createElement("a", { role: "menuitem", href: "#Fideli" }, "Fideli")
            )
          )
      ),


      // Contact
      createElement("a", { href: "#contact", className: styles.link }, "Contact")
    )
  );
}