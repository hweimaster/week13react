import React from 'react';

export default class submitButton extends React.Component{
    render(){
        return React.createElement('button', {class:'btn btn-dark'}, 'Submit');
    }
}