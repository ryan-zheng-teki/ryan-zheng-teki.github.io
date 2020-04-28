import * as React from 'react';
import profile from 'Assets/profile.png';

export function AboutMe() {
  return (
    <>
      <img className="profile" src={profile} alt="Profile" />
      <p>
        Hi,<span role="img" aria-label="Panda">😬</span>! Welcome to my personal blog. My name Ryan. I love coding. I like
        the feeling of converting technology into useful products to improve
        people's lifes.
      </p>
      <p>
        My blog will contain machine learning, and different frameworks of
        frontend and backend.The content will will be continuously updated. Stay
        tuned.
      </p>
    </>
  );
}
