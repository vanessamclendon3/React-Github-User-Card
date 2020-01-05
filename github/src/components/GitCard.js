import React from 'react';


const GitCard = (props) =>{
    return (
        <div>
            <h1>GitHub Clone</h1>
            <div>
                <img src={props.avatar_url} alt="avatar pic" />
                <p>login: {props.login}</p>
                <p>name: {props.name}</p>
                <p>location: {props.location}</p>
                <p>bio: {props.bio}</p>
                Followers: <a href={'./Followers'}>{props.followers}</a>

            </div>
            
        </div>
    )
}

export default GitCard;