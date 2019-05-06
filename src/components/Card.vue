<template>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-img
                :src=image
                :aspect-ratio="ratio"
            ></v-img>

            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{card_title}}</h3>
                    <div> {{ card_text }} </div>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn v-for="(p,i) in path" flat :key="i" :to="route(p)" >{{p}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
export default {
    props: {
        image : String,
        card_title : String,
        card_text : String,
        path : Array,
        ratio : Number
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        route(p){
            if(p == "home"){
                return "/"
            }
            return "/"+p
        }
    }
};
</script>

<style></style>
