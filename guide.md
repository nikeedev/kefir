# Reference Guide:

## Text:

```js 
"Hello, world!"
```

or

```js 
{
    type: "text",
    text: "Hello, world!"
}
```
You can also use `p` instead `text` in type property, of course you will get same result.

## Button:

```js
{
    type: "button",
    text: "Click me",
    action: (e) => {
        alert("You clicked me!");
    }
}
```

## Link:

```js
{
    type: "link", // or a
    text: "my website!",
    href: "nikee.dev"
}
```

## CSS

Add `css:` in the start of a string so that kefirs adds the code thats under it to the global css file. 

## Dropdown/select menu:

```js
{
    type: "select",
    options: ["Option 1", "Option 2", "Option 3", "etc."]
    action: (e) => {
        alert("You chose: ", e.target.value)
    }
}
```

`action` activates when the select has been changed, when a different option is chosen.

## Image

```js
{
    type: "image", // or "img"
    alt: "" // not necessary 
    src: "assets/image.png"
}
```