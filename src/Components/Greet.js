import React, { useState } from "react";
function Greet() {
    const [name, setName] = useState("Test");
    const change = () => {
        setName("Vibha")
    }
    return (
        <>
            <h1>Hello {name}</h1>
            <button onClick={change}>Change</button>
        </>
    )
}

export default Greet;