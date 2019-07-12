import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './reducer/actions'
import PropTypes from 'prop-types';

 class View2 extends React.Component {
  static propTypes = {
    A: PropTypes.object.isRequired,
    updata: PropTypes.object.isRequired,
  };
  render() {
    console.log(this.props)
    return (
      <div>
       <h1>{this.props.updata.updataStr}</h1>
      </div>
    )
  }
  componentDidMount() {
    this.props.actions.updata_str('test');
  }
}
function mapStateToProps(state) {
  return {
    A: state.RootAction,
    updata: state.appAction,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...actions}, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(View2);