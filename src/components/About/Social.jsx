import React from 'react';

const Social = ({ link, name, logo }) => {
    return (
        <a href={link}><img src={logo} style={{ marginLeft: "20px" }} /></a>
    );
}

export default Social;