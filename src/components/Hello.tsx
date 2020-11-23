import * as React from "react";

import { Button } from 'antd-mobile';

export interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps):JSX.Element => (
  <div>
    <h1>Hello from {props.compiler} and {props.framework}!!!</h1>
    <Button type="primary">test</Button>
  </div>
);

export default Hello;