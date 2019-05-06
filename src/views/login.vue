<template>
    <div>
        <v-form>
            <v-text-field
                v-model="username"
                prepend-icon="person"
                name="username"
                label="Nom de connexion"
                @keyup.enter="checkLogin"
            ></v-text-field>
            <v-text-field
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Mot de passe"
                type="password"
                @keyup.enter="checkLogin"
            ></v-text-field>
            <v-card-actions>
                <v-btn primary large block @click="checkLogin">Connexion</v-btn>
            </v-card-actions>
        </v-form>
        {{ resultat }}
    </div>
</template>

<script>
import Axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
            token: "",
            resultat: ""
        };
    },
    methods: {
        checkLogin() {
            Axios.post("http://localhost:8000/api/login_check", {
                username: this.username,
                password: this.password
            })
                .then(response => {
                    this.token = response.data;
                    this.resultat = "succès";
                    sessionStorage.setItem("token", this.token.token);
                    this.$store.state.login = this.username;
                    this.$store.state.connecte = true;
                    this.$router.push("/");
                })
                .catch(e => {
                    if (e.response) {
                        this.resultat = "Erreur de connexion";
                    }
                });
        }
    }
};
</script>

<style scoped></style>
