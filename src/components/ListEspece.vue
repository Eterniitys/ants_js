<template>
    <v-container>
        <v-treeview :items="lstEspece" :transition="true"></v-treeview>
    </v-container>
</template>

<script>
import Axios from "axios";
export default {
    props: ["taille", "tailleReine", "nymphe", "petiolDouble", "petioleMilieu"],
    data() {
        return {
            dataGenre: [],
            dataSpecies: [],
            //ants: this.$store.state.ants
        };
    },
    mounted() {
        Axios.defaults.headers.common["Authorization"] =
            "Bearer " + sessionStorage.getItem("token");
        Axios.get(this.$store.state.urlAPIgenre)
            .then(response => (this.dataGenre = response.data["hydra:member"]))
            .catch(e => {
                sessionStorage.removeItem("token");
                this.dataGenre = e;
                this.$router.push("/login");
            });
        Axios.get(this.$store.state.urlAPIspecies)
            .then(
                response => (this.dataSpecies = response.data["hydra:member"])
            )
            .catch(e => {
                sessionStorage.removeItem("token");
                this.dataSpecies = e;
                this.$router.push("/login");
            });
    },
    computed: {
        ants() {
            return this.formatGenre();
        },
        lstEspece() {
            //
            // Début du trie
            //
            let lstGenreRetenue = [];
            // pour chaque genres
            for (let i = 0; i < this.ants.length; i++) {
                let genre = this.ants[i];
                let nouvGenre = {
                    id: genre.id,
                    name: genre.name,
                    qte: genre.qte,
                    children: []
                };
                // pour chaque espéces
                for (let j = 0; j < genre.children.length; j++) {
                    let espece = genre.children[j];
                    let valide = false;
                    /* critéres de recherche
                     * - taille
                     *
                     */
                    if (espece.children && this.especeValide(espece)) {
                        valide = true;
                    }
                    //si espéce match
                    if (valide) {
                        nouvGenre.children.push(espece);
                    }
                }
                if (nouvGenre.qte > 0) {
                    lstGenreRetenue.push(nouvGenre);
                }
            }
            return lstGenreRetenue;
            //return this.ants
        }
    },
    methods: {
        formatGenre() {
            let ants = [];
            for (let i = 0; i < this.dataGenre.length; i++) {
                let genre = {
                    id: this.dataGenre[i].id,
                    name: this.dataGenre[i].name,
                    qte: this.dataGenre[i].species.length,
                    children: []
                };
                for (let j = 0; j < this.dataSpecies.length; j++) {
                    if (this.dataSpecies[j].gender == this.dataGenre[i]["@id"]) {
                        let specie = {
                            id: this.dataSpecies[j].id,
                            name: this.dataSpecies[j].name,
                            children: [
                                {
                                    name: "Taille",
                                    id: 880,
                                    qte: 2,
                                    children: [
                                        {
                                            text : "min :",
                                            value : this.dataSpecies[j].workersSizeMin
                                        },
                                        {
                                            text : "max :",
                                            value : this.dataSpecies[j].workersSizeMax
                                        }
                                    ]
                                },
                                {
                                    name: "Taille Reine",
                                    id: 880,
                                    qte: 2,
                                    children: [
                                        {
                                            text : "min :",
                                            value : this.dataSpecies[j].queenSizeMin
                                        },
                                        {
                                            text : "max :",
                                            value : this.dataSpecies[j].queenSizeMax
                                        }
                                    ]
                                },
                                {
                                    id: 881,
                                    text: "Pétiole Double :",
                                    value: this.dataSpecies[j].petiolDouble
                                },
                                {
                                    id: 882,
                                    text:
                                        "Nymphe en cocon :",
                                    value: this.dataSpecies[j].cocon
                                },
                                {
                                    id: 883,
                                    text:
                                        "Insertion du pétiole au milieu du gastre :",
                                    value: this.dataSpecies[j].InsertionCentrale
                                }
                            ]
                        };
                        genre.children.push(specie);
                    }
                }
                ants.push(genre);
            }
            return ants;
        },
        // - - - - - - - - - - - - - - - - - - -
        especeValide(espece) {
            let valide = true;
            if (!this.tailleValide(espece) || !this.tailleReineValide(espece)) {
                valide = false;
            }
            //pétiole Double
            let ID_PETIOLE_D = 2;
            if (!this.jspOuiNon(espece, this.petiolDouble, ID_PETIOLE_D)) {
                valide = false;
            }
            //pétiole Double
            let ID_NYMPHE = 3;
            if (!this.jspOuiNon(espece, this.nymphe, ID_NYMPHE)) {
                valide = false;
            }
            //pétiole Double
            let ID_POSITION_PETIOLE = 4;
            if (
                !this.jspOuiNon(espece, this.petioleMilieu, ID_POSITION_PETIOLE)
            ) {
                valide = false;
            }
            return valide;
        },
        tailleValide(espece) {
            let ID_TAILLE = 0;
            if (espece.children[ID_TAILLE]) {
                let ID_TAILLE_MIN = 0;
                let ID_TAILLE_MAX = 1;
                let taille = espece.children[ID_TAILLE].children;
                taille[ID_TAILLE_MIN].name = this.computText(
                    taille[ID_TAILLE_MIN].text,
                    taille[ID_TAILLE_MIN].value
                );
                taille[ID_TAILLE_MAX].name = this.computText(
                    taille[ID_TAILLE_MAX].text,
                    taille[ID_TAILLE_MAX].value
                );
                if (this.taille) {
                    if (espece.children[ID_TAILLE]) {
                        if (this.taille >= taille[ID_TAILLE_MIN].value) {
                            if (this.taille <= taille[ID_TAILLE_MAX].value) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
            }
            return true;
        },
        tailleReineValide(espece) {
            let ID_TAILLE = 1;
            if (espece.children[ID_TAILLE]) {
                let ID_TAILLE_MIN = 0;
                let ID_TAILLE_MAX = 1;
                let taille = espece.children[ID_TAILLE].children;
                taille[ID_TAILLE_MIN].name = this.computText(
                    taille[ID_TAILLE_MIN].text,
                    taille[ID_TAILLE_MIN].value
                );
                taille[ID_TAILLE_MAX].name = this.computText(
                    taille[ID_TAILLE_MAX].text,
                    taille[ID_TAILLE_MAX].value
                );
                if (this.tailleReine) {
                    if (espece.children[ID_TAILLE]) {
                        if (this.tailleReine >= taille[ID_TAILLE_MIN].value) {
                            if (
                                this.tailleReine <= taille[ID_TAILLE_MAX].value
                            ) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
            }
            return true;
        },
        computText(text, val, jspOuiNon) {
            if (jspOuiNon) {
                let ch = "";
                switch (val) {
                    case 0:
                        ch = "Non";
                        break;
                    case 1:
                        ch = "Oui";
                        break;
                    default:
                        ch = "Non définie";
                }
                return text + " " + ch;
            }
            return text + " " + val;
        },
        jspOuiNon(espece, valToCompare, idState) {
            if (espece.children[idState]) {
                espece.children[idState].name = this.computText(
                    espece.children[idState].text,
                    espece.children[idState].value,
                    true
                );
                if (
                    valToCompare < 2 &&
                    valToCompare != espece.children[idState].value
                ) {
                    return false;
                }
            }
            return true;
        }
    }
};
</script>

<style></style>
