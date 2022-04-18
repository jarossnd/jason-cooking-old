import React from 'react';
import PropTypes from 'prop-types';
// Utilities
import kebabCase from 'lodash/kebabCase';
// Components
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

const TopicStyles = styled.div`

`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <>
    <Helmet title={title} />
    <div className="item1">
      <h1>Topics</h1>
      <p>This page contains all the topics I have created blog posts on.</p>
      <TopicStyles>
        <div className="container">
          <ul>
            {group.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/topics/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue}{' '}
                </Link>
                ({tag.totalCount})
              </li>
            ))}
          </ul>
        </div>
      </TopicStyles>
    </div>
  </>
);
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};
export default TagsPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
