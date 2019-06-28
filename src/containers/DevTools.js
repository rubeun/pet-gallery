import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import Inspector from 'redux-devtools-inspector';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor
    defaultIsVisible={false}
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w"
    changeMonitorKey="ctrl-m"
  >
    <Inspector />
    <LogMonitor />
  </DockMonitor>
);
