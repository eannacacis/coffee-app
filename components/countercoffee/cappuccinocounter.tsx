"use client";
import "./coffeecounter.css";
// 1. Add 'createElement' to your imports
import { useState, createElement } from "react";

export default function LatteCounter() {
    const [count, setCount] = useState(0);

  // 2. Define the actions
    const add = () => setCount(count + 1);
    const subtract = () => {
    if (count > 0) {
    setCount(count - 1);
    }
};;

    return createElement("div", { className: "coffeecounter" },
    createElement("h3", null, " 🥛 Cappuccino "),
    
    createElement("div", null, 
      // 3. Connect the buttons to the actions
    createElement("button", { className: "counter-button", onClick: add }, "+"),
    createElement("button", { className: "counter-button", onClick: subtract }, "-")
    ),

    // 4. Use the 'count' variable instead of the string "0"
    createElement("div", { className: "counter-value" }, count)
    );
}