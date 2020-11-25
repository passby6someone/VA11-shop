import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';

import { init } from '@actions/actions';
import { Store } from '@store/store';
import { Dispatch } from 'redux';

const mapStateToProps = (state: Store, ownProps: HelloProps) => ({
  text: state.init.text,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: HelloProps) => ({
  changeText: () => {
    dispatch(init((Math.random() * 100).toFixed(0).toString()));
  },
});

export interface HelloProps { text: string, changeText: () => null }

const HelloInner = (props: HelloProps):JSX.Element => {
  const { changeText, text } = props;
  return (
    <div>
      <Link to="/"><Button type="primary">nav</Button></Link>
      <Button type="primary" onClick={changeText}>{text}</Button>
    </div>
  );
};

const Hello = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloInner);

export default Hello;
