import { Kefir } from './kefir.js';

const ui = [
    `css:
    button {
        background-color: white;
        border-radius: 17px;
        padding: 10px;
        font-family: monospace;
        font-weight: bold;
    }

    button:hover {
        transition-property: background-color;
        transition-duration: 1s;
        transition-timing-function: linear;
        transition-delay: 0.5s;
        background-color: #A6A6A6;
    }
    
    `,
    "Hello!",
    {
        type: "button",
        text: "Click me",
        action: (e) => {
            alert("You clicked me!");
        }
    },
    "br",
    "br",
    {
        type: "link",
        text: "My Website",
        href: "https://nikeedev.stio.studio/"
    },
    "br",
    "br",
    "Select an option: ",
    {
        type: "select",
        options: ["me", "you", "world"], 
        action: (e) => {
            let text = document.getElementById("changeme");

            text.innerText = "Hello " + e.target.value + "!";
        }
    },
    {
        type: "text",
        text: "Hello ",
        id: "changeme"
    }
];

const kefir = new Kefir(ui);

kefir.run();