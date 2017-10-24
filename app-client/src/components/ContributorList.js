import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import Contributor from './Contributor';

const ContributorList = ({ data: { loading, error, getContributorFeed } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {getContributorFeed.map(user => (
        <Contributor key={user.name} user={user} />
      ))}
    </div>
  );
};

ContributorList.propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
};

export const ContributorQuery = gql`
  query ContributorQuery {
    getContributorFeed {
      name
      location
    }
  }
`;

export default graphql(ContributorQuery)(ContributorList);
