import React, { Component } from 'react';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  render() {
    return(
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload-images.jianshu.io/upload_images/5488183-10421d288008cc46.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/720/format/webp" alt="" />
        </HomeLeft>
        <HomeRight>
          right
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;
