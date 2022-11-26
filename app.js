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
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const data = await res.json()

            console.log(data);
            console.log(data.results);
            console.log(JSON.stringify(data.results, null, 4))
            console.log(data.results[0]);
            console.log(data.results[0].name);
            console.log(data.results[0].name.first);

            this.firstName = 'sam'
            this.lastName = 'smith'
            this.email = 'sam@gmail.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    }
})

app.mount('#app')
