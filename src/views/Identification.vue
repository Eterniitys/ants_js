<template>
  <div class="identification">
      <v-content>
          <Card :card_title="title" :card_text="text" :image="image" :path="path" :ratio="2"/>
      </v-content>
      <Selecteur/>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Selecteur from '@/components/Selecteur.vue'
    import Card from "../components/Card";

    export default {
        name: 'home',
        components: {
            Card,
            Selecteur
        },
        data(){
            return {
                image : require("@/assets/images/ants01.jpg"),
                title : "Identifications de fourmis",
                text : "Pour identifié votre fourmis vous allez devoir rentrer les informations que vous pourrez trouvé a partir de votre spéciment afin de réduire les possibilitées. Si vous n'avez pas le vocabulaire il vous suffie de vous rendre sur la page Anatomie qui vous expliquera en quelque mots comment est fait une fourmis",
                path : ["home","anatomie"]
            }
        }
    }
</script>
