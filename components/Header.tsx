import { createElement, ReactElement  } from "react";
import styles from "./Header.module.css";


export default function Header(): ReactElement{
    return createElement(
       
        "header",//header component
        {className:styles.header},
        createElement("h1",{className:styles.title},"Welcome to HAES Coffee ☕"),
       
        //create dropdownliste Menu
       createElement(
      "nav",
      { className: styles.nav },
      createElement("a", { href: "#home", className: styles.link }, "home"),
      createElement("a", { href: "#about", className: styles.link }, "abouts"),
      createElement("a", { href: "#services", className: styles.link }, "servicess"),
      createElement("a", { href: "#contact", className: styles.link }, "Contacts"),
    )

       );
    
}