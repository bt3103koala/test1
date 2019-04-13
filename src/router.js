import Vue from "vue";
import VueFire from "vuefire";
import Router from "vue-router";

import profile from "./components/profile.vue";
import paramdetails from "./components/paramdetails.vue";
import jobs from "./components/jobs.vue";
import login from "./components/login.vue";
import brenda from "./components/brenda.vue";
import IndvJobs from "./components/IndvJobs.vue";

Vue.use(VueFire);
Vue.use(Router);

export const routes = [
  { path: "/profile", component: profile, name: profile },
  { path: "/login", component: login, name: login },
  { path: "/paramdetails", component: paramdetails, name: paramdetails },
  { path: "/jobs", component: jobs, name: jobs },
  { path: "/jobs/:id", component: jobs, name: "jobs" },
  { path: "/jobs/:id2", component: jobs, name: "jobs" },
  {
    path: "/IndvJobs",
    component: IndvJobs,
    name: "IndvJobs"
  },
  { path: "/IndvJobs/:id", component: IndvJobs, name: "IndvJobs" },
  { path: "/IndvJobs/:id2", component: IndvJobs, name: "IndvJobs" },
  { path: "/IndvJobs/:id3", component: IndvJobs, name: "IndvJobs" }
];
