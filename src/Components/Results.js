import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class Results extends Component {
  renderVideo(video, key) {
    return (
      <div className="column is-one-quarter-desktop" key={key}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">
                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
              </a>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">{video.snippet.title}</a>
                </p>
                <p className="subtitle is-6">
                  posted by 
                  <a href={`https://www.youtube.com/channel/${video.snippet.channelId}`} target="_blank">{video.snippet.channelTitle}</a>
                </p>
              </div>
            </div>
            <div className="content" style={{ textOverflow: 'clip' }}>
              {video.snippet.description}
            </div>
            <div className="content">
              <time dateTime={video.snippet.publishedAt}>posted on {moment(video.snippet.publishedAt).format('YYYY-MM-DD')}</time>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    const { videos } = this.props
    return (
      <section className="section">
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {videos.map(this.renderVideo)}
          </div>
        </div>
      </section>
    )
  }
}

Results.propTypes = {
  videos: PropTypes.array.isRequired
}

export default Results