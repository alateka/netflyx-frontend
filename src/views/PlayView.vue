<template>
    <br/>
    <br/>
    <br/>
    <div>
        <Play
            :name="name" 
            :description="description" 
            :posterURL="posterURL"
            :url="url"/>
    </div>
    <Footer/>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Play from "@/components/Movies/Play.vue";
import axios from "axios"
import config from "@/config.json";

export default {
    name: "PlayView",
    components: {
    Footer,
    Play
    },
    data() {
        return {
            name: "",
            description: "",
            url: "",
            posterURL: ""
        }
    },
    mounted() {
        let customConfig = {
            headers: {
            "Authorization": localStorage.token,
            "Accept": "application/json",
            "Content-Type": "application/json"
            }
        };
        axios.get(`${config.BASE_URL_BACKEND}/api/1/check`, customConfig)
        .then((result) => {
            if (result.data == "OK") {
            this.$store.dispatch('setLoginAction', true);
            } else {
            this.$store.dispatch('setLoginAction', false);
            window.location.replace("#/login");
            }
        })


        customConfig = {
          headers: {
          "Authorization": localStorage.token,
          "Accept": "application/json",
          "Content-Type": "application/json"
          }
        };
        axios.get(`${config.BASE_URL_BACKEND}/api/1/movie?id=${this.$route.query.id}`, customConfig)
        .then((result) => {
            this.name = result.data.name;
            this.description = result.data.description;
            this.url = result.data.url;
            this.posterURL = result.data.poster;
        })
    }
}
</script>