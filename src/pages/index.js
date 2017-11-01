import React from 'react'

const IndexPage = ({ data }) => (
  <div>
    <ul style={{ padding: 0, listStyleType: 'none' }}>
      {data.allHnStory.edges.map(post => (
        <li
          key={post.node.id}
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '1rem 0 1rem',
            borderBottom: '1px solid #eee'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignSelf: 'center',
              marginRight: '1rem'
            }}
          >
            {post.node.order}
          </div>

          <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <a
                href={post.node.url}
                target="_blank"
                rel="noopener"
                style={{
                  fontWeight: 'bold',
                  color: '#000'
                }}
              >
                {post.node.title}
              </a>
              <span style={{ marginLeft: '0.5rem' }}>({post.node.domain})</span>
            </div>
            <div>
              <span>{post.node.score} points by </span>
              <span>
                <a
                  style={{
                    fontWeight: 'bold',
                    color: '#000'
                  }}
                  href="#"
                >
                  {post.node.by}
                </a>
              </span>
              <time> {post.node.timeISO} | </time>
              <span>
                <a
                  href="#"
                  style={{
                    color: '#000'
                  }}
                >
                  {post.node.descendants === 0
                    ? ` discuss`
                    : ` ${post.node.descendants} comments`}
                </a>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default IndexPage

export const stories = graphql`
  query StoriesQuery {
    allHnStory(sort: { fields: [order] }) {
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
