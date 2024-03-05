class Kefir {
    #root = "root"
    ui
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
                const p = document.createElement("p");
                p.innerText = elem;
                root.appendChild(p);
            } else if (typeof elem === "object") {
                if (elem.type === undefined || typeof elem.type !== "string") {
                    console.error("Element %s: type is not defined or is not a string", i+1);
                }
                switch (elem.type) {
                    case "text":
                    case "p":
                        const text = document.createElement("p");
                        try {
                            text.innerText = elem.text;
                            if (elem.action !== undefined) {
                                text.onclick = elem.action;
                            }
                        } catch (e) {
                            console.error(e);
                        }
                        root.appendChild(text);
                    case "button":
                        const btn = document.createElement("button");
                        try {
                            btn.innerText = elem.text;
                            if (elem.action !== undefined) {
                                btn.onclick = elem.action;
                            }
                        } catch (e) {
                            console.error(e);
                        }
                        root.appendChild(btn);
                }
            }
        })
    }

};


console.log("%ckefir.js v0.1.0", "font-family:monospace;font-size:20px; padding:10px; border-radius:10px; background: -webkit-linear-gradient(180deg, #7d6f4c, black); color: eggwhite;");

export { Kefir };
