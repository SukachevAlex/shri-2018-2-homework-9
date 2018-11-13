import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppDesktop } from './App@desktop';
import { AppMobile } from './App@mobile';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

// tslint:disable-next-line:no-var-requires
const DeviceDetector = require('device-detector');

const device = DeviceDetector.parse(navigator.userAgent) || {};
const deviceType = device.type || { type: 'Desktop' };

ReactDOM.render(
  deviceType === 'Desktop' ? <AppDesktop /> : <AppMobile />,
  document.querySelector('.root') as HTMLElement
);
registerServiceWorker();
