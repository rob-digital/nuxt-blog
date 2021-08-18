import axios from 'axios'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id == editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
     async nuxtServerInit(vuexContext, context) {

        return await axios.get(process.env.baseUrl + '/posts.json')
                          .then(res => {
                            const postsArray = []
                            for (const key in res.data) {
                              postsArray.push({...res.data[key], id: key})
                            }
                            vuexContext.commit('setPosts', postsArray)
                          })
      },
      async addPost(vuexContext, post) {
        const createdPost = {
          ...post,
           updatedDate: new Date()
        }
        try {
          return await axios.post(process.env.baseUrl +'/posts.json', createdPost)
                                    .then(response => {
                                      vuexContext.commit('addPost', {...createdPost, id: response.data.name})
                                      console.log('{...createdPost, id: response.data.name}:', {...createdPost, id: response.data.name})
                                    })
        } catch (error) {
         console.log(error);
      }
      },
      async editPost(vuexContext, editedPost) {
        return await axios.put(process.env.baseUrl + '/posts/' + editedPost.id + '.json', editedPost )
                          .then(res => {
                            vuexContext.commit('editPost', editedPost)
                          })
      },
      setPosts(vuexContext, payload) {
        vuexContext.commit('setPosts', payload)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
