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
            const { results } = await res.json()
            
            let person = results[0]
            console.log(person);

            this.firstName = person.name.first
            this.lastName = person.name.last
            this.email = person.email
            this.gender = person.gender
            this.picture = person.picture.large
        }
    }
})

app.mount('#app')
