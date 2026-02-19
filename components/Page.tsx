import { createElement, ReactElement } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "./Page.module.css";

export default function Page(): ReactElement {
  return createElement(
    "div",
    { className: styles.container },
    createElement(Header, null),
    createElement(Main, null),
    createElement(Footer, null)
  );
}