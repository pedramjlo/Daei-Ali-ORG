import React from 'react';




const HomeImages = () => {

    const imageContainer = {
        display: "flex",
        flexDirection: "column",
        minWidth: "100%",
        maxHeight: "100%",
        paddingTop: "5px",
        paddingBottom: "20px",
    };

    const imageStyle = {
        Width: "100%",
        maxHeight: "85vh",
        borderRadius: "20px",
        padding: "10px 6.5%"
    }

    return (
        <div className='home-images' style={imageContainer}>
            <img class="img-fluid" src="./shop.jpg" alt="restaurant views" style={imageStyle} />
            <img class="img-fluid" src="./burger.jpg" alt="holding burger" style={imageStyle} />
            <img class="img-fluid" src="./pizza.jpg" alt="daei ali pizza" style={imageStyle} />
        </div>
    );
}


export default HomeImages;