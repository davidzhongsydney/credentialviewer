import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Member from '../components/Member';




const CredentialView = (prop) => {

    let {name} = useParams();

    console.log(name)

    return (
        <div>
            <Member imageURL={"/profiles/" + name + ".jpeg"} 
                    firstName={name} 
                    lastName="West"
                    DOB="12/04/2000"/>
        </div>
    )
};

export default CredentialView;