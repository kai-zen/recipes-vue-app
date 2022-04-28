<template>
    <div id="single-food">
        <img
        class="single-img"
        height="250"
        :src="food.image"
        />
        <h1 style="margin-bottom: 10px">{{food.title}}</h1>
        <h4>Servings: {{food.servings}}</h4>
        <h4>Time it takes: {{food.readyInMinutes}} mins</h4>
        <h4>Health score: {{food.healthScore}}</h4>
        <h4>Price per saving: {{food.pricePerSaving}} $</h4>

        <v-checkbox
        v-model="food.vegan" label="is it vegan?"
        ></v-checkbox>

        <h4>Dish types:</h4>
        <div>
            <v-chip v-for="dishType in food.dishTypes" :key="dishType" class="my-chips">
                {{dishType}}
            </v-chip>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'Home',
    data () {
      return {
        id: this.$route.params.id, 
        food: {},
      }
    },
    methods: {
      getFood() {
        axios.get(`https://api.spoonacular.com/recipes/${this.id}/information?apiKey=17452c198e9f483698f51db4856986e6&includeNutrition=false`).then((response)=>{
          this.food = response.data
          console.log(response)
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    created() {
      this.getFood()
    }
  }
</script>

<style>
#single-food {
    padding: 60px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.single-img {
    border-radius: 30px;
    margin-bottom: 15px;
}
.v-input--selection-controls{
    margin: 0 !important;
}
</style>