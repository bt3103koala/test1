<template>
<div id="brenda">
  <header>
    <h1>Brenda</h1>
  </header>
  <body id="recind">
    Major: {{ $route.params.id }}
    <br>
    CAP: {{ $route.params.id2 }}
    <br>
    {{reviews}}
  </body>
</div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import Vuexfire from "vuexfire";
import Chartkick from "chartkick";
import VueChartkick from "vue-chartkick";
import firebase from "firebase";
import VueChartjs from "vue-chartjs";
import Chart from "chart.js";
import {db} from "../config";

import router from "../router";

Vue.use(VueChartkick, { adapter: Chart });

let reviewsRef = db.ref("reviews");

export default {
  name: "brenda",
  methods: {
    GoToRoute: function() {
      this.$router.push({
        name: "paramdetails",
        params: { id: this.major, id2: this.cap }
      });
    }
  },
  firebase: {
    reviews: reviewsRef
    // BusinessAnalytics: {
    //   // source: db.ref("BusinessAnalytics"),
    //   asObj: true
    // }
  }
};
</script>rue
    // }
  }
};
</script>