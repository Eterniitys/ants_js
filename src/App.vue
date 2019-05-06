<template>
    <div id="app">
        <v-toolbar>
            <v-toolbar-title>Ants</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/">Home</v-btn>
                <v-btn flat to="/identification">Identification</v-btn>
                <v-btn flat to="/anatomie">Anatomie</v-btn>
                <v-btn
                    v-if="this.$store.state.connecte != true"
                    flat
                    to="/login"
                    >Log In
                </v-btn>
                <v-btn v-else flat @click="logout">Log Out</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-container id="t">
            <router-view />
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        logout() {
            this.$store.state.connecte = false;
            sessionStorage.removeItem("token");
            this.$store.state.login = "";
            this.$router.push("/");
        }
    }
};
</script>

<style>
#app {
    background-color: white;
    min-height: 100vh;
}
</style>
