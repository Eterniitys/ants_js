import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Anatomie from "./views/Anatomie.vue";
import Identification from "./views/Identification.vue";
import login from "./views/login.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/identification",
			name: "identification",
			component: Identification
		},
		{
			path: "/anatomie",
			name: "anatomie",
			component: Anatomie
		},
		{
			path: "/login",
			name: "login",
			component: login
		}
	]
});
