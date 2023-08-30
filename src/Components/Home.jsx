import React from "react";

function Home (props) {

    console.log(props)
    return( 
        <div className="main-image">
            <h2>{props.storename}</h2>
            <img src= {props.storeimage} alt="Pic of lady shopping"/> 
            



      
        
        </div>



    )
};

export default Home;