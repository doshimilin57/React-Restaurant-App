

********Test Description********


Front-End Interview Test:

Open Table has a public API available at https://opentable.herokuapp.com/
As an example, http://opentable.herokuapp.com/api/restaurants?city=toronto returns a list of restaurants that deliver to Toronto, including some basic restaurant information.
 
The task is to create an application that accepts a City as a parameter. The application should then display the following information about each restaurant that delivers to that City:
⁃	Name
⁃	Address
⁃	Price
Using Redux store the following for each returned City
⁃	"name"
⁃	"address"
⁃	"area"
 
A user should be able to type in a second parameter such as “dinner” and the results will update to only show restaurants that have either
⁃	"name"
⁃	"address"
⁃	"area"
The web app should have at least 2 fields a user can type in:
⁃	City
⁃	Refine ( should apply to partial or full “name” / “address” / “area” )
⁃	Any other inputs of your choice for filtering
 
Platform Choice
•	MUST use ReactJS, Redux
 
Task requirements
Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met.
•	Please complete the user story below.
•	Your code should compile and run in one step.
•	Try not to use any UI library (ex. Bootstrap), as the more of your own hand-written code and design is there, the better it is to evaluate your own skills. 

User Story
As a user running the applications I can view a list of restaurants in a user submitted City (e.g. Toronto) So that I know which restaurants are currently available
Acceptance criteria
•	For the known City, results are returned
•	User should be able to further refine the results, i.e. using part of a restaurant name, or street, area, etc.
•	You must include tests
•	UI must be responsive
•	Must be fully WCAG 2.0/2.1 AA compliant for the entire page
•	Must perform well in a Lighthouse audit - Performance, SEO, Accessibility
•	The Name, Cuisine Types and Rating of the restaurant are displayed
•	Must work in common browsers, desktop and mobile (Chrome, Safari, IE11)
•	Send your Github repo of your application
•	Host the app on heroku or any other cloud host platform of your choice




********Project Setup********


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
