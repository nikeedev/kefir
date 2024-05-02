"use strict";

class Kefir {
    #root = "root";
    ui;
    set root(id) {
        this.#root = id;
        console.log("Root set to: #", this.root);
    }

    /** 
     * @param {Array<Object>} ui 
     */
    constructor(ui) {
        this.ui = ui;
    }

    run() {
        let root = document.getElementById(this.#root);

        this.ui.forEach((elem, i) => {
            if (typeof elem === "string") {
                if (elem == "br") {
                    const br = document.createElement("br");
                    root.appendChild(br);
                } else if (elem.trimStart().startsWith("css:")) {
                    const css = document.createElement("style");
                    css.innerHTML = elem.split("css:")[1].trim();
                    document.head.appendChild(css);
                } else {
                    const p = document.createElement("p");
                    p.innerText = elem;
                    root.appendChild(p);
                }
            } else if (typeof elem === "object") {
                if (elem.type === undefined || typeof elem.type !== "string") {
                    console.error("Element %s: type is not defined or is not a string", i + 1);
                }
                switch (elem.type) {
                    case "text":
                    case "p":
                        const text = document.createElement("p");
                        if (elem.id !== undefined && elem.id.trim() !== "") {
                            text.id = elem.id;
                        }
                        try {
                            text.innerText = elem.text;
                            if (elem.action !== undefined) {
                                text.onclick = elem.action;
                            }
                        } catch (e) {
                            console.error(e);
                        }
                        root.appendChild(text);
                        break;
                    case "button":
                    case "btn":
                        const btn = document.createElement("button");
                        if (elem.id !== undefined && elem.id.trim() !== "") {
                            btn.id = elem.id;
                        }
                        try {
                            btn.innerText = elem.text;
                            if (elem.action !== undefined) {
                                btn.onclick = elem.action;
                            }
                        } catch (e) {
                            console.error(e);
                        }
                        root.appendChild(btn);
                        break;
                    case "link":
                    case "a":
                        const a = document.createElement("a");
                        if (elem.id !== undefined && elem.id.trim() !== "") {
                            a.id = elem.id;
                        }
                        try {
                            a.innerText = elem.text;
                            a.href = elem.href;
                            a.target = "_blank";
                        } catch (e) {
                            console.error(e);
                        }
                        root.appendChild(a);
                        break;
                    case "select":
                        const select = document.createElement("select");
                        select.selectedIndex = 0;
                        if (elem.id !== undefined && elem.id.trim() !== "") {
                            select.id = elem.id;
                        }
                        try {
                            elem.options.forEach((option) => {
                                const optionElement = document.createElement("option");
                                optionElement.innerText = option;
                                select.appendChild(optionElement);
                            });
                            if (elem.action !== undefined) {
                                select.onchange = elem.action;
                            }
                        } catch (e) {
                            console.error(e);
                        }
                        root.appendChild(select);
                        break;
                    case "img":
                    case "image":
                        const img = document.createElement("img");
                        try {
                            img.src = elem.src;
                            img.alt = elem.alt != "" ? elem.alt : "";
                            if (elem.width !== undefined) {
                                img.width = elem.width;
                            }
                            if (elem.height !== undefined) {
                                img.height = elem.height;
                            }
                        } catch (e) {
                            console.error(e);
                        }
                        root.appendChild(img);
                        break;

                    default:
                        break;
                }
            }
        })
    }

};


console.log("%ckefir.js v0.1.0", "font-family:monospace;font-size:20px; padding:10px; border-radius:10px; background-color: white; color: black;");

export { Kefir };