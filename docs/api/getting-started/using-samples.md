---
title: Using Fula Samples
id: using-samples
---

# Using the Fula Samples

All the Fula samples can be found in the Fula GitHub repo under [examples](https://github.com/functionland/fula/tree/main/examples).

To get things started and give you an idea of how to work with the [Graph API](/api/graph-api), we will set up the [TODO Sample App](https://github.com/functionland/fula/tree/main/examples/react-todo-app).

## Running the TODO Sample

If you followed the previous step, it should already be running.  All you have to do is navigate to `http://localhost:3001` in a browser.

There you should see the following dialog:

<p align="center">
  <img alt="Todo Connect Prompt" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/img/Todo-Connect.png"/>
  <p align="center">Todo Connect Prompt</p>
</p>

## Connect to the Box

Copy the `PeerId` from the Box server logs available in the [previous step](./box-setup) and paste it into the text input.

After clicking 'Connect'...

The app should redirect you to the TODOs app.

<p align="center">
  <img alt="Todo App" src="https://raw.githubusercontent.com/functionland/docs/246391d247fb301351e483594037135d2b3e03d3/static/img/Todo-Connected.png"/>
  <p align="center">Todo App</p>
</p>


## Editing the Sample

Open `/path/to/fula/examples/react-todo-app/src/components/TodoList.tsx` in your favorite editor.

Change the headline from -

```
<h1>Functionland Todo App</h1>
```

to -

```
<h1>My Todo App</h1>
```

You should now see the change reflected in your browser.

Congrats!  Your Box server is now up and running, and you've verified you can connect to it.  You have also learned how to update one of the samples so that you can use it as a starting point for your own DApp.

Now that you are up and running, head on over to the [Fula Reference API](/reference-api) to see everything you can accomplish with Box.
