import React, { Component } from 'react'
import SearchBar from './Components/SearchBar/SearchBar'
import unsplash from '../src/api/unsplash'
import ImageList from './Components/ImageList/ImageList'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      images:[]
    }
    this.onSearchSubmit=this.onSearchSubmit.bind(this)
  }

  onSearchSubmit(term){
    unsplash.get('/search/photos',{
      params:{query:term}
    }).then((response)=>{
      this.setState({images:response.data.results})
    })
  }
  render() {
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar parentCallBack={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App
