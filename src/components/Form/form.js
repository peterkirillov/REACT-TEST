import React from "react";

const Form = props =>(
    <form onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="Enter the city"/>
    <button>Show the weather</button>
    
    
</form>
)

export default Form;