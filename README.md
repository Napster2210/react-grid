This project is basically a CRUD application using ReactJS + NodeJS + Typescript.

## Installation/Setup
- There are two separate directories avaialable in the project `client` and `server`. You need to run `npm install` command first in both the directories to install the dependencies.
- You need to add `.env` file in your `server` directory where you have to mention some env variables(`DB_URI` and `PORT`). You can take reference of `.env.example` file.

## Available Scripts

In the project directory, you have to fist change the working directory to `server`:

### `npm start`

Runs the NodeJS API in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to run it.

You will also see any lint errors in the console.

### `npm run client`

Runs the ReactJS app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run server`

Runs the NodeJS API in the development + watch mode.<br />
Open [http://localhost:5000](http://localhost:5000) to run it.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run dev`

Runs the NodeJS API and ReactJS app both concurrently in the development + watch mode.<br />
Open [http://localhost:5000](http://localhost:5000) to run NodeJS API.
Open [http://localhost:5000](http://localhost:5000) to view ReactJS in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## React JS Scripts

### `npm run test`

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
