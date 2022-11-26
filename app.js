const app = Vue.createApp({
    data() {
        return {
            firstName: 'Ali',
            lastName: 'Karimi',
            email: 'karimi.me.ali@gmail.com',
            gender: 'female',  // male or female in style.css
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            console.log(this.firstName);
        }
    }
})

app.mount('#app')
