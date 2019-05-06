<template>
    <v-container>
        <v-form>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md3>
                        <v-text-field
                            label="Taille en mm"
                            v-model="taille"
                            outline
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md3>
                        <v-text-field
                            label="Taille de la reine en mm"
                            v-model="tailleReine"
                            outline
                        ></v-text-field>
                    </v-flex>
                    <!--v-flex xs12 sm6 md3>
                        <v-text-field
                            label="Outline"
                            outline
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md3>
                        <v-text-field
                            label="Outline"
                            outline
                        ></v-text-field>
                    </v-flex-->
                </v-layout>
                <v-layout row wrap>
                    <v-radio-group v-model="petiolDouble" label="Pétiole en deux partie :">
                        <v-radio
                            label="Je ne sais pas"
                            :value=2
                        ></v-radio>
                        <v-radio
                            label="Oui"
                            :value=1
                        ></v-radio>
                        <v-radio
                            label="Non"
                            :value=0
                        ></v-radio>
                    </v-radio-group>
                    <v-radio-group v-model="nymphe" label="Nymphe en cocon:">
                        <v-radio
                            label="Je ne sais pas"
                            :value=2
                        ></v-radio>
                        <v-radio
                            label="Oui"
                            :value=1
                        ></v-radio>
                        <v-radio
                            label="Non"
                            :value=0
                        ></v-radio>
                    </v-radio-group>
                    <v-radio-group v-model="petioleMilieu" label="Insertion du pétiole au milieu du gastre :">
                        <v-radio
                            label="Je ne sais pas"
                            :value=2
                        ></v-radio>
                        <v-radio
                            label="Oui"
                            :value=1
                        ></v-radio>
                        <v-radio
                            label="Non"
                            :value=0
                        ></v-radio>
                    </v-radio-group>
                </v-layout>
            </v-container>
        </v-form>
        <ListEspece :taille="taille" :tailleReine="tailleReine" :petiolDouble="petiolDouble" :nymphe="nymphe" :petioleMilieu="petioleMilieu"/>
    </v-container>
</template>

<script>
    import ListEspece from '@/components/ListEspece.vue'
export default {
    name: 'Selecteur',
    components: {
        ListEspece
    },
    data() {
        return {
            /**
             * b3 : boolean (0/1) + état indéterminé (2)
             */
            petioleMilieu : 2, // b3
            nymphe : 2, //b3
            petiolDouble : 2, // b3
            taille : undefined, // number
            tailleReine : undefined //number
        }

    },
    computed: {},
    methods: {}
};
</script>

<style></style>
