'use strict';

const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = GraphQL;

// import the user query file we created
const StudioWorkoutQuery = require('./queries/StudioWorkout');

// lets define our root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    StudioWorkouts: StudioWorkoutQuery.index(),
  },
});

// export the schema
module.exports = new GraphQLSchema({
  query: RootQuery,
});
