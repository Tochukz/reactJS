## Server Side Rendered Application
A barebone implementation of a server side rendered application.

#### Requirements  
* create-react-app - A react cli
* express
* @babel/register, @babel/preset-env @babel/preset-react
* ignore-styles

#### Setup
__Create he application__  
`$ create-react-app ssr-app`  
__Install the dependencies__  
`$yarn add @babel/register @babel/preset-env @babel/preset-react ignore-styles express`  

`ignore-styles` is a babel utility that tells it to ignore CSS files imported using the import syntax.

__Build the application__  
`$ yarn build`  

__Run the application__  
`$ node server/index.js`

This solution may not be suiter for production in large application. For large applications it is recommended to use a framework like [Next.js](https://nextjs.org/) or [Gatsdby](https://www.gatsbyjs.org/)  
[See article source](https://flaviocopes.com/react-server-side-rendering/)  
[See concept](https://itnext.io/server-side-rendering-with-react-redux-and-react-router-fa5b67d4965e)
