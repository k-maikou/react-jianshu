import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  DetailWrapper,
  Header,
  Content,
} from './style';

class Detail extends PureComponent {

  render() {
    const { title, content } = this.props;
    return(
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.handleDetailData(this.props.match.params.id);
  }

}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  handleDetailData(id) {
    dispatch(actionCreators.getDetailData(id));
  }
});

export default connect(mapState, mapDispatch)(Detail);
