# Reference Guide:

## Text:

```js 
"Hello, world!"
```

or

```js 
{
    "type": "text",
    "text": "Hello, world!"
}
```
You can also use `p` instead `text` in type property, of course you will get same result.

## Button:

```js
{
    "type": "button",
    "text": "Click me",
    "action": (e) => {
        alert("You clicked me!");
    }
}
```

## CSS

Add `css:` in the start of a string so that kefirs adds the code thats under it to the global css file. 

