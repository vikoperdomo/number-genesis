'use strict';

const axios = require('axios');

const StudioWorkoutsController = {
  index: args => {
    const URL = `https://www.reddit.com/r/${args.subreddit ||
      'javascript'}.json`;

    return axios
      .get(URL)
      .then(response => {
        const __StudioWorkouts = [];
        const StudioWorkouts = response.data.data.children;

        StudioWorkouts.map(StudioWorkout => {
          StudioWorkout.data.content = StudioWorkout.data.selftext_html;
          __StudioWorkouts.push(StudioWorkout.data);
        });
        return __StudioWorkouts;
      })
      .catch(error => {
        return { error: error };
      });
  },
};

module.exports = StudioWorkoutsController;
