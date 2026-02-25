//Components/Main.tsx

"use client";

import { createElement, ReactElement, useState } from "react";
import styles from "./Main.module.css";

// --- Sub-component: CoffeeCounter ---
function CoffeeCounter() {
  const [counters, setCounters] = useState([
    { name: "☕ Coffee", count: 0 },
    { name: "🥛 Latte", count: 0 },
    { name: "☁️ Cappuccino", count: 0 },
  ]);

  function handleOrder(index: number) {
    const nextCounters = counters.map((item, i) => {
      if (i === index) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCounters(nextCounters);
  }

  // Calculate total for a quick summary
  const totalOrders = counters.reduce((acc, item) => acc + item.count, 0);

  return createElement(
    "div",
    { className: styles.counterWrapper },
    
    // Mapping through the coffee types
    counters.map((item, i) =>
      createElement(
        "div",
        { key: item.name, className: styles.orderRow },
        createElement("span", { className: styles.coffeeName }, `${item.name}: `),
        createElement("b", null, `${item.count} `),
        createElement(
          "button",
          { 
            onClick: () => handleOrder(i),
            className: styles.orderBtn 
          },
          "Order" // Changed from +1 to Order
        )
      )
    ),

    // Summary line
    createElement("hr"),
    createElement("p", null, `Total Drinks Prepared: ${totalOrders}`)
  );
}

// --- Main Component ---
export default function Main(): ReactElement {
  const [shots, setShots] = useState<number>(0);

  return createElement(
    "main",
    { className: styles.main, id: "home" },
    createElement("h2", null, "☕ Coffee App Dashboard"),
    
    createElement(
      "button",
      { className: styles.btn, onClick: () => setShots((s) => s + 1) },
      "Total Espresso Shots: ",
      String(shots)
    ),

    createElement(
      "section",
      { className: styles.card },
      createElement("h3", null, "Barista Station"),
      createElement(CoffeeCounter)
    ),

    createElement(
      "section",
      { className: styles.card, id: "contact" },
   
    )
  );
}
