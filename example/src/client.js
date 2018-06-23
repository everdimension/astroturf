import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'css-literal-loader/styled'; // eslint-disable-line import/no-extraneous-dependencies

import 'bootstrap/scss/bootstrap-reboot.scss';

import Button from './Button';

const _ = css`
  html,
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <div>
      <Button theme="secondary">Styled button</Button>
      <Button theme="primary">Primary button</Button>
      <Button theme="secondary" bold>
        Bold button
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
