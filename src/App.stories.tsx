import React from 'react';

import App  from './App';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'App',
    component: App,
};

export const Main = () => <App/>;
