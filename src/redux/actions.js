//remove
//actions are just javascript objects

export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index  //in ES6 this is the same as 'index: index'
  }
}

export function addPost(post) {
  return {
    type: 'ADD_POST',
    post  //in ES6 this is the same as 'post:post'
  }
}
//add post