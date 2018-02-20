import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyDoE6pKg7hghh1CDOhu556WDf9Hf2vRc-4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchYoutube('surfboards');
  }

  searchYoutube(term) {
    console.log('searching',term);
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={term => this.searchYoutube(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
