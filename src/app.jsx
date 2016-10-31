import React from 'react';
import {observer} from 'mobx-react'
import {store} from './store';

export const App = observer(() => (
  <div>{renderCurrentView()}</div>
))

function renderCurrentView() {
  switch (store.view.name) {
    case 'post': return <Post post={store.post}/>
    default: return <Posts posts={store.posts}/>
  }
}

const Posts = observer(({ posts }) => (
  <div>
    <h1>Posts Overview</h1>
    <ul>
      {posts.map(post =>
        <li onClick={() => store.showPost(post.id)}>{post.title}</li>
      )}
    </ul>
  </div>
))

const Post = observer(({ post }) => (
  <div>
    <h1>Post {post.id || '_'}</h1>
    <h2>{post.title || '_______'}</h2>
    <p>{post.body}</p>
  </div>
))