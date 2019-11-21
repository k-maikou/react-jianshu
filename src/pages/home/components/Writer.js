import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { 
  WriterWrapper,
  WriterTitle,
  WriterInfo,
  WriterItem,
  WriterLookAll
} from '../style';

class Writer extends PureComponent {

  render() {
    const { clickRefresh, page, totalPage } = this.props;
    return(
      <WriterWrapper>
        <WriterTitle>
          <span>推荐作者</span>
          <span 
            className='click-refresh' 
            onClick={() => clickRefresh(page, totalPage)}
          >
            <i className='iconfont'>&#xe851;</i>
            换一批
          </span>
        </WriterTitle>
        {this.writerInfo()}
        <WriterLookAll>
          查看全部 >
        </WriterLookAll>
      </WriterWrapper>
    )
  }

  writerInfo() {
    const { list, page } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {

      for (let i = (page - 1) * 4; i < page * 4; i++) {
        pageList.push(
          <WriterItem key={newList[i].id}>
            <div className='pic-parse'>
              <img className='writer-pic' src={newList[i].avatar_source} alt="" />
            </div>
            <span className='writer-title'>{newList[i].nickname}</span>
            <span className='writer-follow'>+关注</span>
            <p className='writer-main'>写了{newList[i].total_wordage.substr(0, 3)}k字 · {newList[i].total_likes_count}喜欢</p>
          </WriterItem>
        )
      }
      
    }

    return(
      <WriterInfo>
        {pageList}
      </WriterInfo>
    )

  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList']),
  page: state.getIn(['home', 'writerPage']),
  totalPage: state.getIn(['home', 'totalPage'])
})

const mapDispatch = (dispatch) => ({
  clickRefresh(page, totalPage) {
    page < totalPage ? page++ : page = 1;
    dispatch(actionCreators.clickPageChange(page));
  }
})

export default connect(mapState, mapDispatch)(Writer);
