import axios from 'axios';

export const state = () => ({
    posts: []
});

export const actions = {
    async getPost({commit}){
        console.log('request api post');
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        commit('setPost', res.data);
    }
}

export const mutations = {
    setPost(state, posts){
        state.posts = posts;
    }
}