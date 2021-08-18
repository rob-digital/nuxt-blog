// use global components here
// and register this plugin in nuxt.config.js -> plugins
import Vue from 'vue'

import  AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'
import  PostList from '@/components/Posts/PostList'

// use Vue.components for components
Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList)

// use Vue.use for something else
// Vue.use(something else)

