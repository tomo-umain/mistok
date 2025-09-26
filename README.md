# mistok
a react debugger to inspect live JSON in your components

## screenshot
<img width="635" height="619" alt="image" src="https://github.com/user-attachments/assets/42aa4b2e-179b-4323-8c69-e4d3f2f21896" />

## features
- dragging/resizing Mistok around on the page
- multiple tabs
- formats minified JSON to be readable
- auto-updates when the objects change
- supports objects, arrays, strings

### usage
```javascript
<Mistok
  objects={{
    product: {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    users: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
  }}
/>
```

### etymology
what does Mistok even mean?? well, it comes from the Icelandic word "Mistök", meaning "mistake" or "error" - which is what this tools is trying to help fix! now you know :D
