# Readux Toolkit  
__Introduction__  
The is an opinionated flavor of redux nd it is deliberately limited in scope.    
It does not addess concepts line _"resuable encapsulated Redux modules"_, _data caching_,
 _folder_ or _file structure_ managing entity relationships in the store, and so on.   
Redux Tookkit includes and wraps many of the plain Redux API with some default settings 
and includes some libraries like [`redux-thunk`](https://www.npmjs.com/package/redux-thunk) and [`redux-devtool-extension`](https://github.com/zalmoxisus/redux-devtools-extension) and some middlewares.   

__Installation__  
For new projects use the office `Redux+ JS template` for `Create React App`.  This provides 
a `React Redux` integration for React components:   
```
npx create-react-app my-app --template redux 
```   
See the `redux-template-app` beside this app to explore the scaffolding.   

For exising projects use `reduxjs/toolkit` npm package:  
```
npm install @reduxjs/toolkit
```