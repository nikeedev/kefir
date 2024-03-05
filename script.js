import { Kefir } from './kefir.js';

const ui = [
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
    }
];

const kefir = new Kefir(ui);

kefir.run();