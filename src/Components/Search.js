import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    e.preventDefault()
    console.log(this.searchTerm.value)
  }

  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <form onSubmit={this.handleSearch}>
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <input 
                        type="search"
                        className="input is-large"
                        role="search"
                        defaultValue={this.state.searchTerm}
                        ref={(input) => { this.searchTerm = input}}
                        placeholder="Buscar artistas ou bandas..." />
                    </div>
                    <div className="control">
                      <button className="button is-link is-large">
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

export default Search
