import React, { Component } from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import Photo from './Photo'
import { removePost } from '../redux/actions'


class Main extends Component {
  constructor() {
    super()

  }

  render() {
    console.log(this.props);
    return <div>
      <h1>
        <Link to="/">Photowall</Link>
      </h1>
      <Route exact path="/" render={() => (
        <div>
          <PhotoWall {...this.props} />
          {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} /> */}
        </div>
      )} />
      <Route path="/AddPhoto" render={({ history }) => (
        <AddPhoto {...this.props} />
      )} />

    </div>
  }
}

export default Main //presentational component