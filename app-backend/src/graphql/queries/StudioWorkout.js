'use strict';

const GraphQL = require('graphql');
const { GraphQLList, GraphQLString, GraphQLNonNull } = GraphQL;

// import the StudioWorkout type we created
const StudioWorkoutType = require('../types/StudioWorkout');

// import the StudioWorkout resolver we created
const StudioWorkoutResolver = require('../resolvers/StudioWorkout');

module.exports = {
  index() {
    return {
      type: new GraphQLList(StudioWorkoutType),
      description:
        'This will return all the StudioWorkouts we find in the given subreddit.',
      args: {
        subreddit: {
          type: GraphQLString,
          description: 'Please enter subreddit name',
        },
      },
      resolve(parent, args, context, info) {
        return StudioWorkoutResolver.index(args);
      },
    };
  },
};
