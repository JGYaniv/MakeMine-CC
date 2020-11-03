![MakeMine Logo](makemine-logo-black-logo-black-text.jpg)

# MakeMine Software Engineer Interview Test

This test is part of our hiring process for Software Engineers.

Be sure to read all of the instructions carefully and follow the guidelines below.

## What you need to do

The goal of this assignment is to code a responsive Vue.js app in order to demonstrate your ability to learn the framework and make a basic web app using the required technology.

There are several steps available with increasing difficulty. The only hard requirements are getting through `Step 1`, but completing the rest will be an added bonus.

The steps will be building on top of each other, so feel free to take them one at a time or start out with the goal of completing them all.

Main topics to cover:

- Front end web development skills
- Focus on [Vue.js](https://vuejs.org/v2/guide/) framework and essential features
- [Bootstrap CSS](https://getbootstrap.com/docs/4.5/getting-started/introduction/) for quickly adding styles and layouts
- Mobile Responsive techniques to ensure usability across multiple devices

Bonus topics to explore:

- [Typescript for Vue](https://vuejs.org/v2/guide/typescript.html) and [Class Component](https://class-component.vuejs.org/) syntax
- Following the [Vue Style Guide](https://vuejs.org/v2/style-guide/) for framework best practices
- Clean custom CSS instead of, or in addition to Bootstrap styling
- Styling app with a clean, logical layout
- Providing code that is refactored and properly componentized

The main goal of this assignment is to demonstrate an ability to work with the Vue framework and gain a strong knowledge of its ecosystem, as well as other important aspects of our codebase. The tech stack required throughout this assignment will be a large part of what you'll be working with at MakeMine.

### Step 1 - Vue Essentials

You will be creating a simple user management system. Your app will have a single page at this point, and you will be coding the following features:

- Ability to create users with the following properties

  - `id` -- unique identifier for each user
  - `name` -- name of the user
  - `role` -- user's position in the company
    - Should be one of `lead`, `senior`, `junior`, or `intern`
  - `location` -- location of the user
  - `hobbies` -- array of strings referencing activities the user enjoys (ex. reading, writing, hiking, etc.)

- Each created `user` should be an object stored in a `users` array

- Display created users in a rendered list

  - The list should loop over the created users and render a `UserListItem` component for each of them
  - The `UserListItem` component should display both the user's `name` and `role`
  - Utilize props in order to pass user data into the `UserListItem` component

- Sorting / filtering rendered list

  - Add ability to sort `UserListItem` components alphabetically in both ascending and descending order
  - Add ability to filter rendered `UserListItem` components by different roles
  - Utilize computed properties for these tasks

- Selecting a `UserListItem` should toggle the display of a `UserDetail` component
  - The `UserDetail` component should display all of the user's information
  - Selecting a different `UserListItem` should update the `UserDetail` component with the relevant information

### Step 2 - Bootstrap Vue

[Bootstrap Vue](https://bootstrap-vue.org/docs) is a popular component library for the framework, built on top of Bootstrap's CSS guidelines. Integrate Bootstrap Vue into your application and complete the following:

- Use one or more Bootstrap Vue components to compliment your application

  - You may choose whichever component(s) you would like to use
  - Do not replace any of the components from `Step 1`

- Some recommendations to help you get started

  - Replacing any buttons, inputs, or other HTML elements with their respective Bootstrap Vue components
    - EX. `b-button`, `b-form-input`, `b-dropdown`, `b-select`
  - A `b-modal` popup for entering new user information, or as a wrapper for the `UserDetail` component
  - Using a `b-form` when creating new users
  - `b-tabs` to split up the list of `UserListItem` components by their `role`
  - Adding a `b-nav` or `b-navbar` to improve the layout of your application

- None of these recommendations are requirements, only inspiration to help get you started
- Feel free to get creative with how you integrate Bootstrap Vue into your application

Bonus:

- Implement a new feature to the application with the use of Bootstrap Vue

### Step 3 - Persistent State and Vuex

As a Vue application continuously grows in size, organizing your state variables becomes a high priority. Keeping track of state is an important task, and in order to do so with this assignment, please complete one of the following options:

Option A: App level state (easier)

- Keep track of your `users` state variable at the `App.vue` level, so that this information can be persistent through page navigation
- This will involve using `props` to pass data down, and `$emit` to send data up
- **Tip** Look into using `Vue.set()` to solve any potential issues with reactivity

Option B: Vuex (recommended)

- Integrate a [Vuex store](https://vuex.vuejs.org/) for a centralized state management solution
  - For examples of a Vuex store in action checkout the [Official Github Repository](https://github.com/vuejs/vuex/tree/dev/examples)
- Create a `user` module in Vuex
- Save created users into this `user` module
- Your list of users from `Step 1` should also be reading from this `user` module

After choosing either Option A or B, implement the following features:

- Save how many times each `UserListItem` has been selected
- Save the first, and most recent time a `UserListItem` has been selected
  - You may use the native [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) constructor for Javascript, the [moment](https://momentjs.com/) npm package, or any other solution you have in mind
- Display these new properties on the `UserDetail` component
- Allow removing `user` objects from the `users` array
- Allow editing input data for `user` objects

### Step 4 - API Fetching

Retrieving data from external APIs is a common feature for Vue applications. For this step, you will be connecting your application with an external data source.

Before you begin:

- Select a public API of your choice
- If you need help selecting an API to use, reference [github.com/public-apis/public-apis](https://github.com/public-apis/public-apis) for plenty of available options
- Avoid APIs requiring keys or any other similar restrictions
- You may use the [axios](https://www.npmjs.com/package/axios) package, the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) API, or any other solution for completing asynchronous data retrieval

Complete the following tasks:

- Pull data from public endpoints of chosen API
- Display a list of results, showing information about each piece of data
- Add ability to link data to different created `users`
  - Think favoriting, liking, assigning tasks, etc.
- After linking data to your created `users`, display this information on the `UserDetail` component

Bonus:

- Use [vue-router](https://router.vuejs.org/guide/) to create a new page for the display of your retrieved data
- Add functionality for fetching more data, and/or refreshing retrieved data
- Use [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) syntax for promises
- Use Bootstrap Vue's `b-table` or `b-list-group` components for your list of retrieved data

HUGE Bonus:

- Pull data from a personally created, public API

### Step 5 - Vue Apollo and GraphQL

GraphQL is a helpful technology for simplifying data retrieval, and providing a transparent interface of external data. For this step, you will be connecting your application with an external data source using GraphQL.

Before you begin:

- **Note:** Do not replace the functionality from `Step 4` with your work from this step
- Select a public GraphQL API of your choice
- If you need help selecting an API to use, reference [github.com/APIs-guru/graphql-apis](https://github.com/APIs-guru/graphql-apis) for plenty of available options
- Avoid APIs requiring keys or any other similar restrictions
- Use the [Vue Apollo](https://apollo.vuejs.org/guide/) and [graphql-tag](https://www.npmjs.com/package/graphql-tag) packages for this integration

Complete the following tasks:

- Integrate Vue Apollo into your application
- Create an Apollo Client for interfacing with the GraphQL API you choose
- Pull data from public endpoints of chosen API
- Display a list of results, showing information about each piece of data
- Add ability to link data to different created `users`
  - Think favoriting, liking, assigning tasks, etc.
- After linking data to your created `users`, display this information on the `UserDetail` component

Bonus:

- Separate `gql` queries into their own files
- Use [vue-router](https://router.vuejs.org/guide/) to create a new page for the display of your retrieved data
- Add functionality for fetching more data, and/or refreshing retrieved data
- Use [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) syntax for promises
- Use Bootstrap Vue's `b-table` or `b-list-group` components for your list of retrieved data

HUGE Bonus:

- Pull data from personally created API

## How to send your app code

When you feel you are done, send us by email:

- A link to a **private GitHub repository** with an invite access for both:
  - [@ricktate](https://github.com/ricktate)
  - [@caleblmyers](https://github.com/caleblmyers)

Bonus:

- An online demo of the application hosted on provider of choice (Heroku, Netlify, Github Pages, etc.)

## Tips

If this is your first time creating a Vue.js application it is highly recommended to read through their documentation, look up tutorials, and/or play around with a new project first, whatever methods best work for you in learning and understanding a new technology

- Got questions? Contact us! (No penalties for asking questions)
- Install the [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) extension for a helpful tool that allows you to review your component structure and state in-browser
- Take advantage of the [Vue CLI](https://cli.vuejs.org/guide/) for quickly bootstrapping a new project
- Show off your skills! Don't hesitate to use more advanced features and practices than are required
- Same goes for styling and layouts: feel free to get creative with the way your assignment looks and feels.
- The app must be responsive: it should look good and work on both mobile and desktop screens.
- Follow best practices and professional standards for your code

Bonus:

- Write clear README on how the app was designed and how to run the code
- Describe optimization opportunities on this README as well
