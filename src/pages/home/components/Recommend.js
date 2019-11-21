import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { 
RecommendWrapper, 
RecommendItem, 
RecommendCode, 
CodeInfo,
RecommendEject
} from '../style'

class Recommend extends PureComponent {

  showCode = () => {
    const { show } = this.props;
    if (show) {
      return(
          <RecommendEject>
            <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          </RecommendEject>
      )
    }else{
      return null
    }
  }

  render() {
    const { list, handleCodeShow, handleCodeHide } = this.props;
    return(
      <RecommendWrapper>
        {list.map((item) => (
          <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
        ))}
        {this.showCode()}
        <RecommendCode
          onMouseEnter={handleCodeShow}
          onMouseLeave={handleCodeHide}
        >
          <img className="code-pic" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          <CodeInfo>
            下载简书手机APP >
            <p className="code-par">随时随地发现和创作内容</p>
          </CodeInfo>
        </RecommendCode>
      </RecommendWrapper>
    )
  }
  
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList']),
  show: state.getIn(['home', 'show'])
})

const mapDispatch = (dispatch) => ({
  handleCodeShow() {
    dispatch(actionCreators.mouseCodeShow());
  },
  handleCodeHide() {
    dispatch(actionCreators.mouseCodeHide());
  }
})

export default connect(mapState, mapDispatch)(Recommend);
