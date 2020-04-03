import React from 'react';
import profile from 'Assets/profile.jpeg'
export class AboutMe extends React.Component {

    render() {
        return (
            <React.Fragment>
            <img className='profile' src={profile} />
            <p>My name ryan. I love coding. I like the feeling of creating something cool</p>
            <p>Welcome to my personal blogging page. My blog will contain machine learning, and different frameworks of frontend and backend.
            </p>
            </React.Fragment>

        );
    }
}