import React, { Component } from 'react'
import { connect } from 'redux-zero/react'

import Search from './Components/Search'
import Results from './Components/Results'

const mapToProps = ({ videos }) => ({ videos })

class App extends Component {
  render() {
    const { videos } = this.props
    return (
      <div>
        <Search />
        {videos.length > 0 ? <Results videos={videos} /> : null}
      </div>
    )
  }
}

export default connect(mapToProps)(App)
