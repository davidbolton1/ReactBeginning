// #1 import React
import React from 'react';
import Card from './Card';

// #2 Create a function
function Greet(props) {
    // React functions always return a single value
    const greetingText = `Hello, ${props.whom}`
    return (
        <div>
            <Card text={greetingText} />

        </div>
        
    );

    }

// #3 Export the function
export default Greet