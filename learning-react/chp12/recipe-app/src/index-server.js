import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';;
import Menu from './components/menu';
import data from './data/recipes';

/*React is exposed globally so the renderToString method can work properly */
global.React = React;

const html = renderToString(<Menu recipes={data} />)

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
};

const sendHTMLPage = (req, res) => res.status(200).send(`
  <!DOCTYPE html>
  <html>
      <head>
          <title>React Recipes App</title>
      </head>
      <body>
          <div id="react-container">${html}</div>
      </body>
      <script>
          window.__DATA__ = ${JSON.stringify(data)}
      </script>
  </html>
`) ;

const app = express()
           .use(logger)
           .use(express.static('./assets'))
           .use(sendHTMLPage);

const port = 3000;
app.listen(port, () => console.log(`Recipe app running at 'http://localhost:${port}'`));
