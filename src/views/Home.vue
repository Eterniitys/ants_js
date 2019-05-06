<template>
  <div class="home">
    <Card :card_title="title" :card_text="text" :image="image" :path="path" :ratio="2.75"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'home',
  components: {
      Card
  },
    data(){
      return {
          image : require("@/assets/images/messor_barbarus.jpg"),
          title : "Ants",
          text : "Bienvenue sur Ants, ce site a pour but de vous aidé a identifié les fourmis que vous pourriez trouvé dans votre jardin. Pour se faire vous aurez besoin d'une fourmis (une ouvriére ou une reine) et d'un moyen de l'observé au plus proche",
          path : ["identification","anatomie"]
      }
    }
}
</script>
