## Organizing Numbers Test:

**Scaffolded:** Create react app

**Data Source:** small server using express \* see npm run server

**State Management used:** Redux (For such a simple state, it was used just for fun)

**Side Effects Management:** Redux-Saga

**Libraries:** Beautiful dnd, styled-components, Material-UI

**Live version:** https://test-geenee.s3.amazonaws.com/index.html

## Development approach

- I decided to use Material UI, because I like that design library and is easy to create layouts using it's twelve spaced grid which is similar to the boostrap one.
- I used Redux and Redux Saga for state management and side effect management.
- App scaffolded with create-react-app and typescript
- Used pure Components to avoid unnecessary re-rendering in child components.
- Used Boundary error component to preven crashes in the application.

## Issues Found

- When using the Material UI and styled-components together (const myCustomEl = styled(Grid)``;), when passing props to the styled Material component, it was logging a console error. It was because of when mapping the properties, the type of the expected properties from the Material element was not matching any of the custom properties passed to the styled component.

- I decided to use typescript although I haven't worked with it for a while, so at the beggining I had a hard time trying to remember how to correctly use it, and it was surprising to me how much I had forgotten.

- For state management, I comtemplated handle it using React state because it was a simple state, but the first approach I took was use the context API pattern. Once I have working the first stable version, I decided to change from context API to redux because I wanted to provide the numbers from an external source and for handling this side effects, I decided to use redux-saga because I wanted to have a first contact with this side-effect management library.
- I have always confused the words even and odd. Then when I showed my wife the live version she told me that I did it wrong, but it was just the odd box was receiving the even numbers and viceversa.
- Initially I had all components as stateless functional components, but for the dragable elemets of the dnd library, it was throwing me errors about the ref reference of the element. It was suggesting to use a class component instead to solve this, so I used it.

## What I would have done if I had more time

- Add more unit test
- Create the number boxes with cubes using three.js, but they looked ugly and it was eating all browsers resources and failing in mobile devices, I guess I was using it badly.
- instead of using PureComponents I would have used useCallback or useMemo to prevent unnecessary child rerendering, but I was in a hurry and it was the pattern that I knew best.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run server`

Runs the server that provide the array of numbers for the app to work.<br />
Open [http://localhost:3333/numbers](http://localhost:3333/numbers) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
