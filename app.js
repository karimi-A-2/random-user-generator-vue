const app = Vue.createApp({  // we have access to Vue from cdn
    template: '<h1> hello world {{firstName}}</h1>',
    data() {
        return {
            firstName: 'Ali'
        }
    }
})

app.mount('#app')
