import { gql } from '@apollo/client'

export const GET_PINNED_REPOS = gql`
query GetPinned {
  rateLimit {
    cost
    remaining
    resetAt
  }
  user(login: "FernandoH-G") {
    pinnedItems(first: 5) {
      edges {
        node {
          ... on Gist {
            name
          }
          ... on Repository {
            name
            description
            url
            openGraphImageUrl
            pushedAt
          }
        }
      }
    }
  }
}
`;

export const GET_REPO_COMMITS = gql`
query GetRepoCommits($repoName: String!) {
  repository(name: $repoName, owner: "FernandoH-G") {
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 5) {
            edges {
              node {
                pushedDate
                message
                url
              }
            }
          }
        }
      }
    }
  }
}
`;