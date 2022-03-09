---
title: Using FULA Samples
id: using-samples
---

# Using the FULA Samples

All of the FULA samples can be found in the FULA GitHub repo under [examples](https://github.com/functionland/fula/tree/main/examples).

To get things started and give you an idea of how to work with the [DATA Api](/api/data-api) we will set up the [TODO Sample App](https://github.com/functionland/fula/tree/main/examples/react-todo-app)

## Running the TODO Sample

If you followed the previous step, it should already be running and all you have to do is navigate to `http://localhost:3001` in a browser.

You should see the following dialog:

![Todo Connect Prompt](/img/Todo-Connect.png)

## Connect to the BOX

Copy the `PeerId` from the BOX server logs in in the [previous step](./box-setup) and paste it into the text input.

After clicking 'Connect'...

The app should redirect you to the TODOs app.

![Todo App](/img/Todo-Connected.png)

## Editing the Sample

Open `/path/to/fula/examples/react-todo-app/src/components/TodoList.tsx` in your favourite editor.

Change the headline from -

```
<h1>Functionland Todo App</h1>
```

to -

```
<h1>My Todo App</h1>
```

You should now see the change reflected in your browser.

Congrats!  You now:

   * have the BOX server up and running and verified you can connect to it

   *  learned how to update one of the samples so that you can use it as a starting point for your own DApp

You can now head over to [Using the FULA Client Library](./fula-client) to learn how to include the FULA client in your own project that you are starting from scratch.
