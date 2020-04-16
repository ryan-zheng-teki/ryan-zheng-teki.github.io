import * as React from 'react';
import profile from 'Assets/profile.jpeg';
export function AboutMe()
{
    return (
        <React.Fragment>
        <img className='profile' src={profile} />
            <p>Hi,😬! Welcome to my personal blog. My name Ryan. I love coding. I like the feeling of converting technology into useful products
                to improve people's lifes. 
            </p>
            <p>My blog will contain machine learning, and different frameworks of frontend and backend.The content will will be continuously
                updated. Stay tuned. 
            </p>
        </React.Fragment>
    );
}