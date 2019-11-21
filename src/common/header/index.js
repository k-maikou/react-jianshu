import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';

class Header extends Component {

  getListArea = () => {

    const { 
      focused, list, totalPage, page, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage 
    } = this.props;
    const newList = list.toJS()
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    
    if (focused || mouseIn) {
      return(
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }
  
  render() {
    
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'><i className='iconfont beta'>&#xe648;</i></NavItem>
          <NavItem className='right'><i className='iconfont Aa'>&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe64d;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='writing'>
            <i className='iconfont fly'>&#xe616;</i>
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    )
    
  }

}

const mapStateToProps = (state) => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  totalPage: state.getIn(['header', 'totalPage']),
  page: state.getIn(['header', 'page']),
  mouseIn: state.getIn(['header', 'mouseIn'])
});

const mapDispatchToProps = (dispatch) => ({

  handleInputFocus(list) {
    (list.size === 0) && dispatch(actionCreators.getList());
    dispatch(actionCreators.searchInputFocus());
  },
  handleInputBlur() {
    dispatch(actionCreators.searchInputBlur());
  },
  handleMouseEnter() {
    dispatch(actionCreators.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actionCreators.mouseLeave());
  },
  handleChangePage(page, totalPage, spin) {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    }else {
      originAngle = 0;
    }
    spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';

    ( page < totalPage ) ? page++ : page = 1;
    dispatch(actionCreators.clickChangePage(page));
  }

});

export default connect(mapStateToProps,mapDispatchToProps)(Header);