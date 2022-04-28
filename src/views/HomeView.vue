<template>
  <div class="home-page">
    <h4>Sort results by:
    </h4>
    <div>
      <v-chip class="my-chips">
        Price
      </v-chip>
      <v-chip class="my-chips">
        Ratings
      </v-chip>
      <v-chip class="my-chips">
        Popularity
      </v-chip>
    </div>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="food in foods"
        :key="food.id"
      >
        <SingleCard :food='food'/>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="4"
        circle
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import SingleCard from '../components/SingleCard.vue';
import axios from 'axios'
  export default {
    name: 'Home',
    data () {
      return {
        page: 1,
        foods: [],
      }
    },
    methods: {
      getFoods() {
        axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=17452c198e9f483698f51db4856986e6&number=20').then((response)=>{
          this.foods = response.data.results
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    components: {SingleCard},
    created() {
      this.getFoods()
    }
  }
</script>

<style>
  .home-page {
    padding: 30px 10%;
  }
  .my-chips {
    margin: 5px 5px 0;
    cursor: pointer;
  }
</style>
