import React from 'react';
import { connect } from 'react-redux'
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
} from './style'

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
    return (
      <HeaderWrapper>
        <Logo />
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
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>
              &#xe64d;
            </i>
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

const mapStateToProps = (state) => ({
  focused: state.getIn(['header', 'focused'])
})

const mapDispatchToProps = (dispatch) => ({

  handleInputFocus() {
    dispatch(actionCreators.searchInputFocus());
  },
  handleInputBlur() {
    dispatch(actionCreators.searchInputBlur());
  }

})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
