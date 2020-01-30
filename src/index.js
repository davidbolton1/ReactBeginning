// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
console.log('A test')
console.log('Another test')

function greet ({name}) {
    

    return `Hello, ${name}`;
}

const person = {
    name: 'YesHA',
    
};
console.log(greet(person))

const greet2 = () => {
    console.log('Ah')
}
greet2()
