import { Kefir } from "./kefir.js";

let button = localStorage.getItem("counter") || 0;
let clicked = false;
const ui = [
    `css:
    .clicked {
        background-color: yellow;
        transition: background-color 5s;
    }

    #click {
        width: 100px;
        height: 100px;
        background-color: white;
        border: 1px solid black;
    }
    `,
    "Hello",
    "br",
    {
        type: "button",
        text: "Increment: " + button,
        action: (e) => {
            button++;
            e.target.innerText = "Increment: " + button;
            localStorage.setItem("counter", button);
        },
        id: "incr"
    },
    "br",
    "br",
    {
        type: "button",
        text: "Clear",
        action: (e) => {
            button = 0;
            document.getElementById("incr").innerText = "Increment: " + button;
            localStorage.setItem("counter", button);
        }
    },
    "hr",
    {
        type: "input",
        input_type: "checkbox",
        action: () => {
            document.getElementById("click").className = clicked ? "" : "clicked";
            clicked = !clicked;
        }
    },
    "Did you click it??",
    {
        type: "div",
        id: "click"
    }

]

const kefir = new Kefir(ui);
kefir.run();