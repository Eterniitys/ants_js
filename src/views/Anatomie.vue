<template>
    <div class="home">
        <v-layout row wrap>
            <Card
                :card_title="title"
                :card_text="text"
                :image="image"
                :path="path"
                :ratio="1.4"
            />
        </v-layout>
    </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
    name: "home",
    components: {
        Card
    },
    data() {
        return {
            image: require("@/assets/images/anatomie.jpg"),
            title: "Anatomie",
            text: "",
            path: ["home","identification"]
        };
    }
};</script>
