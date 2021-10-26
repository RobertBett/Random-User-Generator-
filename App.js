const app = Vue.createApp({
    data () { 
        return{
            firstName: 'Roba',
            lastName: 'Bazu',
            email: 'bazu@gmail.com',
            gender: 'male',
            picture: 'https://media-exp1.licdn.com/dms/image/C5603AQFYhgfJ7eafOw/profile-displayphoto-shrink_200_200/0/1632752162415?e=1639612800&v=beta&t=37UWVHE2FbLJp1ikz5Tg6l8ECqV_gjNzcidEQQhDPbA'
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json();
            const { name, email, gender, picture } = await results[0]
            console.log(name, email, gender, picture );
            this.firstName= name.first,
            this.lastName= name.last,
            this.email= email,
            this.gender= gender,
            this.picture= picture.large
        }
    }
});

app.mount('#app');
