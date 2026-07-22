This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Moonshot Kimi K3

This project includes Moonshot AI's Kimi K3 model via the OpenAI-compatible
[`openai`](https://www.npmjs.com/package/openai) SDK. The client lives in
`src/api/kimi.js` and targets the `kimi-k3` model at `https://api.moonshot.ai/v1`.

To use it:

1. Get an API key from the [Moonshot AI platform](https://platform.moonshot.ai/).
2. Create a `.env` file in the project root with:

   ```
   REACT_APP_MOONSHOT_API_KEY=your-key-here
   ```

3. Restart the dev server, then call it from any component:

   ```js
   import { askKimi } from './api/kimi'

   askKimi('Hello, Kimi!').then(reply => console.log(reply))
   ```

**Security note:** the key is bundled into the client in this setup, so anyone
who opens the deployed site can read it. Keep this for local development only —
proxy requests through a backend before deploying publicly.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# simple-react-progressive-web-app
