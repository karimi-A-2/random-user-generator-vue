const app = Vue.createApp({
    data() {
        return {
            firstName: 'Ali',
            lastName: 'Karimi',
            email: 'karimi.me.ali@gmail.com',
            gender: 'male',  // male or female in style.css
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            this.firstName = 'sam'
            this.lastName = 'smith'
            this.email = 'sam@gmail.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    }
})

app.mount('#app')
