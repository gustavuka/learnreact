import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h1>Check out my portfolio!</h1>
        <Link to="/portfolio/1">Item 1</Link>
        <Link to="/portfolio/5">Item 5</Link>
        <Link to="/portfolio/3">Item 3</Link>
        <Link to="/portfolio/71">Item 71</Link>
    </div>
);

export default Portfolio;
