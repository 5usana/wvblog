// YourComponent.stories.js

import React from 'react';

import { NavBar } from '../components/NavBar';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'NavBar',
  component: NavBar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <NavBar {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};