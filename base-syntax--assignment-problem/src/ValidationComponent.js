import React from 'react';

const validationComponent = (props) => {
    let validationMessage = 'Text too Short!';
    if(props.validate >= 5){
        validationMessage = 'Text too Long!';
    }  
    return (
            <div >
            {validationMessage}   
            </div>
        );
}

export default validationComponent;