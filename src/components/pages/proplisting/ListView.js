import React from 'react'

function ListView(props) {
     let data = props.data
     return (
          <div>
               {typeof data !== "undefined" ? (
        data.map((art) => (
          <div key={art.title}>
            <li>
              {art.title} <br /> - {art.description} <br /> <a href={art.url}>{art.url}</a>
            </li>
            <hr />
          </div>
        ))
      ) : (
        <span>loading</span>
      )}
          </div>
     )
}

export default ListView
