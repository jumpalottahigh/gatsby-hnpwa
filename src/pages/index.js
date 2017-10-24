import React from 'react'

const IndexPage = ( {data} ) => (
  <div>
    <ol>
      {data.allHnStory.edges.map(post =>
        (
          <li key={post.node.id}>
            <div><strong>{post.node.title}</strong></div>
            <div><em>{post.node.by}</em></div>
            <a href={post.node.url} target="_blank" rel="noopener">{post.node.url}</a>
            <time>{post.node.timeISO}</time>
            <br /><br />
          </li>
        )
      )}
    </ol>
  </div>
)

export default IndexPage

export const stories = graphql`
  query StoriesQuery {
    allHnStory(sort: {fields: [order]}) {
      edges {
        node {
          id
          title
          score
          order
          domain
          url
          by
          descendants
          timeISO(fromNow: true)
        }
      }
    }
  }
`