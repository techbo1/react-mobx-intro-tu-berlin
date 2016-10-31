import {observable} from 'mobx';
import {fetch} from './fetch';

class ViewStore {
  @observable view = { name: 'overview' }
  @observable posts = []
  @observable post = {}

  showOverview = () => {
    this.view = { name: 'overview' }
    fetch('/api/posts.json')
      .then(posts => this.posts = posts)
  }

  showPost = async(id) => {
    this.view = { name: 'post', id: id }
    this.post = {}
    await sleep(1000)
    this.post = await fetch(`/api/${id}.json`)
  }

  get currentPath() {
    switch (this.view.name) {
      case 'post': return `/posts/${this.view.id}`
      default: return '/posts/'
    }
  }
}

export const store = new ViewStore()

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}