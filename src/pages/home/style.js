import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px;
    height: 280px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  right: 40px;
  bottom: 40px;
  font-size: 12px;
  color: #333;
  cursor: pointer;
`;

/**********************Left Start***************************/
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  margin-left: 18px;
  padding-right: 10px;
  float: left;
  line-height: 32px;
  font-size: 14px;
  color: black;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  margin-bottom: 10px;

  .topic-pic{
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;
/* list */
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;

  .pic{
    width: 150px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 4px;
  }
`;
export const ListInfo = styled.div`
  width: 460px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;
/**********************Left End***************************/

/**********************Right Start************************/

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
  position: relative;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  margin-bottom: 6px;
`;

export const RecommendEject = styled.div`
  width: 160px;
  height: 160px;
  padding: 10px;
  box-shadow: 0 0 8px -2px #000;
  border-radius: 4px;
  position: absolute;
  background: #fff;
  bottom: 29%;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid #dcdcdc;

  img{
    width: 160px;
  }
`

export const RecommendCode = styled.a.attrs({href: 'https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click'})`
  display: block;
  border: 1px solid #dcdcdc;
  padding: 10px 20px 10px 20px;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  color: #333;

  .code-pic{
    width: 60px;
    float: left;
    margin-right: 10px;
    color: #333;
  }
`
export const CodeInfo = styled.div`
  float: left;
  font-size: 15px;
  margin-top: 7px;
  line-height: 25px;

  .code-par{
    font-size: 13px;
    color: #999;
  }
`

export const WriterWrapper = styled.div`
  width: 278px;
`

export const WriterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #969696;

  .click-refresh{
    cursor: pointer;
  }
  .iconfont{
    font-size: 14px;
  }
`

export const WriterInfo = styled.ul`
  width: 100%;
  overflow: hidden;
`

export const WriterItem = styled.li`
  margin-top: 10px;
  line-height: 20px;
  float: left;

  .pic-parse{
      width: 48px;
      height: 48px;
      border: 1px solid #dcdcdc;
      border-radius: 50%;
      float: left;
      margin-right: 10px;

      .writer-pic{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      float: left;
      }
  }
  .writer-title{
    float: left;
    font-size: 14px;
    color: #333;
    margin-top: 4px;
  }
  .writer-follow{
    float: right;
    color: #42c02e;
    font-size: 13px;
    margin-top: 4px;
  }
  .writer-main{
    float: left;
    font-size: 12px;
    color: #969696;
    width: 200px;
  }
`

export const WriterLookAll = styled.div`
  width: 100%;
  padding: 7px 7px 7px 12px;
  box-sizing: border-box;
  text-align: center;
  background: #f7f7f7;
  color: #787878;
  font-size: 13px;
  margin-top: 12px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
`

/**********************Right END**************************/