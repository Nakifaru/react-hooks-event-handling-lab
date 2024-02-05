import React from "react";

// Code Keypad Component Here

function Keypad (){

    function handleChange(event) {
        console.log('Entering password...')
    }

    return (
        <>
            <p>Keypad placeholderholder</p>
            <form>
                <input type="password" name="password" onChange={handleChange}></input>
            </form>
        </>
    )
}

export default Keypad;