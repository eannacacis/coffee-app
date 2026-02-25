import { createElement, ReactElement } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "./Page.module.css";
import CoffeeCounter from "./countercoffee/coffeecounter";
import LatteCounter from "./countercoffee/lattecounter";
import cappuccinoCounter from "./countercoffee/cappuccinocounter";
export default function Page(): ReactElement {
  return createElement(
    "div",
    { className: styles.container },
    createElement(Header, null),
    createElement(Main, null),
    createElement(CoffeeCounter, null),
    createElement(LatteCounter, null),
    createElement(cappuccinoCounter, null),
    createElement(Footer, null)
  );
}
