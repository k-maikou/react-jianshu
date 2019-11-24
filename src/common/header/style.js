import styled from 'styled-components';
import logoPic from '../../assets/img/logo.png';

const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  z-index: 1;
`

const Logo = styled.div`
  height: 56px;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
`

const Nav = styled.div`
  width: 940px;
  margin: 0 auto;
  height: 100%;
  padding-right: 20px;
  box-sizing: border-box;
`

const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;

  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
    font-size: 15px;
    .beta{
      color: #ec6149;
      margin-right: 10px;
    }
    .Aa{
      font-weight: bold;
    }
  }
  &.active{
    color: #ea6f5a;
  }
  &.out{
    cursor: pointer;
  }
`

const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;

  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &::placeholder {
    color: #999;
  }
  &.focused{
    width: 240px;
  }
`

const SearchWrapper = styled.div`
  float: left;
  position: relative;
  
  .zoom{
    position: absolute;
    right: 5px;
    top: 13px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    &.focused{
      background: #777;
      color: #fff;
    }
  }
`

const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

const Button = styled.div`
  float: left;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg{
    color: #ec6149;
    
  }
  &.writing{
    color: #fff;
    background: #ec6149;
    padding: 0 20px;
    .fly{
      margin-right: 10px;
    }
  }
`

const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 20px 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color: #fff;
`

const SearchInfoTitle = styled.div`
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
  &:hover{
    color: #333;
  }
  .spin{
    margin-right: 4px;
    font-size: 12px;
    display: inline-block;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`

const SearchInfoList = styled.div`
  overflow: hidden;
`

const SearchInfoItem = styled.a`
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  display: block;
  float: left;
  margin: 0 10px 10px 0;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
`

export {
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
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoItem,
}
