import { Kefir } from "./kefir.js";

const ui = [
    "Hello",
    "br",
    {
        type: "button",
        text: "Increment: " + (localStorage.getItem("count") == null || localStorage.getItem("count") == undefined ? "0" : localStorage.getItem("count").toString()),
        action: (e) => {
            let incr = document.getElementById("incr");
            if (incr.getAttribute("count") == undefined) incr.setAttribute("count", 0);

            incr.setAttribute("count", localStorage.getItem("count") != null || localStorage.getItem("count") != undefined ? localStorage.getItem("count") : "0");
            
            incr.setAttribute("count", (parseInt(incr.getAttribute("count"))+1).toString());
            e.target.innerText = "Increment: " + incr.getAttribute("count");
            localStorage.setItem("count", incr.getAttribute("count"));
        },
        id: "incr"
    },
    "br",
    "br",
    {
        type: "button",
        text: "Clear",
        action: (e) => {
            let incr = document.getElementById("incr");
            incr.setAttribute("count", 0);
            incr.innerText = "Increment: " + incr.getAttribute("count");
            localStorage.setItem("count", incr.getAttribute("count"));
        }
    },
    "hr",
]

const kefir = new Kefir(ui);
kefir.run();
