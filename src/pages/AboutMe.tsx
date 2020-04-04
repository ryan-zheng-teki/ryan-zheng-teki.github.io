import * as React from 'react';
import profile from 'Assets/profile.jpeg';
export class AboutMe extends React.Component {

    render() {
        return (
            <React.Fragment>
            <img className='profile' src={profile} />
                <p>Welcome to my personal blog. My name ryan. I love coding. I like the feeling of creating something cool</p>
                <p>My blog will contain machine learning, and different frameworks of frontend and backend.</p>
            </React.Fragment>
        );
    }
}