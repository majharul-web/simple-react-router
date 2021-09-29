import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import "./Friend.css"

const Friend = (props) => {
    const{name,id,email,address}=props.friend;
    const url=`/friend/${id}`;

    const history=useHistory();

    const buttonHandler=()=>{
        history.push(url)
    }
    return (
        <div className="friendStyle">
            <h2>Id:{id}</h2>
            <h3>Name:{name} Id:{id}</h3>
            <p>Email:{email}</p>
            <p>Address{address.city}</p>

            <Link to={url}>Visit me</Link>
            <br />

            <Link to={url}>
            <button>Visit</button>
            </Link>
            <br />

            <button onClick={buttonHandler}>click me</button>
        </div>
    );
};

export default Friend;