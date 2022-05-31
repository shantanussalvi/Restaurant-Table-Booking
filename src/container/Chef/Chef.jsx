import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Cooking with Love provides food for the soul. People who love to eat are always the best ones.</p>
        </div>
        <p className="p__opensans"> I love cooking because I love to eat. I’m inspired by the comforting soul food I’d eat as a kid, flavors from cultures all around the world, what I happen to see at the farmer’s market, and social media food trends. My personal cooking style is all about flavor and color. I want everything I prepare to be exciting and interesting, even if it’s something we’re all familiar with. </p>
      </div>

      <div className="app__chef-sign">
        <p>Tejas Bhat</p>
        <p className="p__opensans">Chef & Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
