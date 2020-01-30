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


function greet ({
    name,
    address,
    //occupation
}) 
{
    return `Hello, ${name}, You live at ${address}, Yer a ${person.occupation}`;
}

//Opt CMd Down arrow
const person = {
    name: 'YesHA',
    address: 'YEEEEA',
    occupation: 'Wizard'
    
};

// function fromEarth({
//     name,
//     occupation
// }) {
    

const fromEarth = (originalObject) => {
    // if (originalObject.address)
    // return originalObject
    // else {

    //const theAddress = originalObject.address || 'Earth';
    const modifiedSomebody = {
        address: 'Earth',
        ...originalObject,
        //address: theAddress,
        age: '1000000000000000'
    }
    return modifiedSomebody;
    
}
//console.log(greet(fromEarth(person)))
//console.log(greet(person))

const greet2 = () => {
    console.log('Ah')
}
//greet2()


const persons = [

    {name: 'ALSDFA', address: 'Pacific'},
    {name: 'HOSE', address: 'Notasdf'},
    {name: 'Pota', address: 'YesIndeeed'} 
];
const modifiedPersons = [
    'Shonea',
    ...persons,
    
]

/*
function addressIsNotPacific(person) {
    return person.address !== 'Pacific';
}

const noPacifics = persons.filter((person) => {
    return person.address !== 'Pacific';
});
*/

const noPacifics = persons.filter(person => person.address !== 'Pacific')
//console.log(addressIsNotPacific(persons[2]))
//const noPacifics = persons.filter(addressIsNotPacific);
console.log(noPacifics)
console.log(persons.map(greet))
