import React from 'react';
import ReactDOM from 'react-dom';

//importing from named export
import { HelloWorld } from './components/HelloWorld';

//importing from named export and changing the name
//import { HelloWorld as HelloWorldTest } from './components/HelloWorld';

//importing from default export
//import  HelloWorld  from './components/HelloWorld';

ReactDOM.render(
    React.createElement(HelloWorld),
    document.querySelector('#root'),
)