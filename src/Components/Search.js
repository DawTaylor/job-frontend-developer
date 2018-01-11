import React, { Component } from 'react'
import { connect } from 'redux-zero/react'

import { Actions } from '../Actions'

const mapToProps = ({ loading, videos }) => ({ loading, videos })

class Search extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    e.preventDefault()
    if (this.searchTerm.value.length === 0) return false
    this.props.fetchVideos(this.searchTerm.value)
  }

  render() {
    const { loading, videos } = this.props
    const fullHeight = videos.length > 0 ? '' : 'is-fullheight'
    return (
      <section className={`hero is-primary ${fullHeight}`}>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <form onSubmit={this.handleSearch}>
                  <div className="field has-addons">
                    <div className='control is-expanded'>
                      <input 
                        type="search"
                        className="input is-large"
                        role="search"
                        ref={(input) => { this.searchTerm = input }}
                        placeholder="Buscar artistas ou bandas..." />
                    </div>
                    <div className="control">
                      <button className={`button is-link is-large ${loading}`}>
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(mapToProps, Actions)(Search)
