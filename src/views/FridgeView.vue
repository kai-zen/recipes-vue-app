<template>
    <div class="fridge-page">
        <h2>Here are foods with least amount of calories:</h2>
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
        axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=336ee5af15ce4d0b837d78e1a1d16497&number=20&maxCalories=200').then((response)=>{
          this.foods = response.data.results.sort(() => Math.random() - 0.5)
          console.log(response)
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

<style scoped>
.fridge-page{
    padding: 20px 10%;
}
</style>