const app = Vue.createApp({  // we have access to Vue from cdn
    data() {
        return {
            firstName: 'Ali',
            lastName: 'Karimi',
            email: 'karimi.me.ali@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    }
})

app.mount('#app')
