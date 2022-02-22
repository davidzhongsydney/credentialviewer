import React from 'react'
import { useParams } from 'react-router-dom';

const Home = (prop) => {

    let  {param} = useParams();

    console.log(param)

    return (
        <div>Home</div>
    )
};

export default Home;