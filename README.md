# React-Comments-System Demonstration

This PoC demonstrates how a simple commenting system can be implemented in React.
The following function are implemented:

- Create (prepend) a comment for exising comment(s); nesting is allowed
- Delete any comment and, if needed, also sub-comments of the node
- Persist state in `localStorage`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Structure

This projects uses the following structure

```
|---src/
||---Components/ # all simple components
||---Context/ # place for all context related files
|||---Comments/ # context logic for comments logic
||---Types/ # place for all kind of types
||---Views/ # place all views of the app, one place to manage routes
```

## State management

State management is done with build-in `Context` feature of React. The entire state is initially loaded
from `localStorage` and saved on each update. There are also some cases to use async state loading from different
sources like APIs or local providers to persist and update state even between tabs. For simplicity, this PoC uses a simple approach with `localStorage`

## Design

The design is not following any specific guide and is inconsistent. Most of the design examples are taken
from [flowbite](https://flowbite.com/docs/components/buttons/).
Basic responsiveness is applied. I have to admit that during the development of this project my experience
with `TailwindCSS` was limited.

## Improvements

Here is a short list of possible improvements:

- For simplicity a default comment / post is initialized in the state, a function to create the first comment / post
  should be implemented
- Implement more standalone components like icon buttons to reduce the redundancy
- Add more tests for components, reducers etc.
- Improve UI/UX by adding more attributes on the `CommentType` like `created_date`, `likes` or sorting by created date
- Introduce simple local `API` to handle state updates instead of the logic inside reducers, here a combination
  with [RxDB](https://rxdb.info/)
- Introduce [Formik](https://formik.org/) to handle more complex form state and validation
- The helper for random IDs is not safe for uniqueness: implement some `uuid` lib to create proper IDs
- Add `eslint`, `test coverage` etc.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
