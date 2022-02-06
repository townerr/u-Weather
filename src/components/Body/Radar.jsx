import React from 'react';
import { Container } from 'react-bootstrap';

const Radar = (props) => {

    const radarUrl = 'https://www.rainviewer.com/map.html?loc='+ props.lat + ',' + props.long + ',7&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=0&c=1&o=83&lm=0&th=0&sm=1&sn=1';
    
    return (
        <Container>
            <h1 className='radar-text'>Live Weather Radar:</h1>
            <iframe src={radarUrl} title='rader' width="100%" height="600px" className='radar-frame'></iframe>
        </Container>
    );
};

export default Radar;
