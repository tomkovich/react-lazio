import React from 'react'
import loading from './../images/gif/loading-arrow.gif'

const Loading = () => {
    return (
        <div className="loading">
            <h4>rooms loading...</h4>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Loading
