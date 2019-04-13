<template>
<div>
  <header>
    <h1>Profile</h1>
  </header>
  <body>
    <form id="profile">
      Major:
      <select name="major2" v-model="major2">
        <option v-for="mjr in GetMajorList(major_fb, major)" selected :value="mjr">{{mjr}}</option> 
      </select>
      <br>
      <br>
      Recommended Industries for {{major}} students
      <br>
      <pie-chart :data="GetIndustryByMajor(industry_fb, major2)"></pie-chart>

      <br>Industry:
      <select name="industry2" v-model="industry2">
        <option v-for="ind in GetIndustryList(industry_fb, major)" selected :value="ind">{{ind}}</option>
      </select>
      <br>
      <input type="button" value="Let's Start" @click="GoToRoute();">
    </form>
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
import { db } from "../config";
import router from "../router";

export default {
  name: "profile",
  data() {
    return {
      major: "Business Analytics",
      major2:"",
      industry2: ""
    };
  },
  firebase: {
    // we should use async await here
    industry_fb: {
      source: db.ref("industry"),
      asObject: true
    },
    major_fb: {
      source: db.ref("major"),
      asObject: true
    }
  },
  methods: {
    GoToRoute: function() {
      this.$router.push({
        name: "jobs",
        params: { id: this.major2, id2: this.industry2 }
      });
    },
    GetIndustryByMajor: function(industry_fb, major) {
      if (industry_fb[major] === undefined) {
        console.log("Error");
      } else {
        return industry_fb[major];
      }
    },
    GetMajorList: function(major_fb, major) {
      if (major_fb[major] === undefined) {
        console.log("WAITING")
      } else {
        let result = Object.keys(major_fb[major]);
        return result
      }
    },
    GetIndustryList: function(industry_fb, major) {
      if (industry_fb[major] === undefined) {
        console.log("WAITING")
      } else {
        let result = Object.keys(industry_fb[major]);
        return result
      }
    }
  }
};
</script>


 