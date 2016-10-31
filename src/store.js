import {observable} from 'mobx';
import {fetch} from './fetch';

class ViewStore {
  // TODO
}

export const store = new ViewStore()

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}