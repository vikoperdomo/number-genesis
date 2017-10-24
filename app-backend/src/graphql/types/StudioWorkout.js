'use strict';

const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = GraphQL;

const StudioWorkoutType = new GraphQL.GraphQLObjectType({
  name: 'StudioWorkout',
  description:
    'StudioWorkout Type, For all the StudioWorkouts present in Reddit.',

  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'ID of the StudioWorkout',
    },

    title: {
      type: GraphQLString,
      description: 'Title of the StudioWorkout',
    },

    url: {
      type: GraphQLString,
      description: 'URL of the StudioWorkout',
    },

    author: {
      type: GraphQLString,
      description: 'Name of the Author who created this StudioWorkout',
    },

    ups: {
      type: GraphQLInt,
      description: 'Total number of Upvotes received for this StudioWorkout',
    },

    downs: {
      type: GraphQLString,
      description: 'Total number of Downvotes received for this StudioWorkout',
    },

    content: {
      type: GraphQLString,
      description: 'Markdown content of the StudioWorkout',
    },
  }),
});

module.exports = StudioWorkoutType;
