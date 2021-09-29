import React, { useState,useEffect } from 'react';
import Friend from '../Friend/Friend';
import "./Friends.css"

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h3>My all Friends:{friends.length}</h3>
            <div className="container">
                {
                    friends.map(friend=><Friend friend={friend} key={friend.id}></Friend>)
                }
            </div>
            
        </div>
    );
};

export default Friends;