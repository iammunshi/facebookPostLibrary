import React, { Component } from 'react';
import Fbposts from './components/fbPosts';
import Header from './components/header';
const obj1 = { 
  createdBy: "Kashif Sulaiman",
  avatar: 'https://picsum.photos/300',
  description: "I'm not feeling good today!",
  images: ['https://picsum.photos/300', 'https://picsum.photos/200/300?image=0',
  'https://picsum.photos/200/300/?gravity=east', 'https://picsum.photos/200', 'https://picsum.photos/400',
  'https://picsum.photos/200', 'https://picsum.photos/200'],
  createdAt: Date.now(),
  likes: ['aslam', 'ahmed'],
  }
  const obj2 = { 
    createdBy: "Kashif Sulaiman",
    avatar: 'https://picsum.photos/300',
    description: "I'm not feeling good today!",
    images: ['https://picsum.photos/300', 'https://picsum.photos/200/300?image=0',
    'https://picsum.photos/200/300/?gravity=east', 'https://picsum.photos/200', 'https://picsum.photos/400',
    'https://picsum.photos/200', 'https://picsum.photos/200'],
    createdAt: Date.now(),
    likes: ['aslam', 'ahmed'],
    }
class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#e9ebee'}}>
        <Header/>
        <Fbposts object={obj1}/>
        <Fbposts object={obj2}/>
      </div>
    );
  }
}

export default App;
