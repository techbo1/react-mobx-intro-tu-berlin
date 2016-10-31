import React from 'react';
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import {store} from './store';

export const App = () => (
  <div>{renderCurrentView()}</div>
)

function renderCurrentView() {
  return "TODO"
}