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

function greet ({
    name,
    address,
    //occupation
}) 
{
    return `Hello, ${name}, You live at ${address}, Yer a ${person.occupation}`;
}

const person = {
    name: 'YesHA',
    address: 'YEEEEA',
    occupation: 'Wizard'
    
};

// function fromEarth({
//     name,
//     occupation
// }) {
    

const fromEarth = (somebody) => {
    const modifiedSomebody = {
        ...somebody,
        address:'Earth'
    }
    return modifiedSomebody;
    
}
console.log(greet(fromEarth(person)))
//console.log(greet(person))

const greet2 = () => {
    console.log('Ah')
}
greet2()
