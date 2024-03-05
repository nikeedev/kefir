import { Kefir } from './kefir.js';

const ui = [
    "Hello!",
    { 
        // "type": "button",
        "text": "Click me",
        "action": () => {
            alert("You clicked me!");
        }
    }
];

const kefir = new Kefir(ui);

kefir.run();