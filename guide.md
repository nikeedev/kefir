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

