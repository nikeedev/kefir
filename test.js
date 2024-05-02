import { Kefir } from "./kefir.js";

let button = localStorage.getItem("counter") || 0;
const ui = [
    "Hello",
    "br",
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
    {
        type: "button",
        text: "Clear",
        action: (e) => {
            button = 0;
            document.getElementById("incr").innerText = "Increment: " + button;
            localStorage.setItem("counter", button);
        }
    }
]

const kefir = new Kefir(ui);
kefir.run();