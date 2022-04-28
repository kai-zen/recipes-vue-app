<template>
  <v-app id="inspire">
    <MyDrawer :drawer="drawer"/>
    <v-app-bar
     app
      absolute
      color="#6A76AB"
      dark
      prominent
      src="../public/images/bkg.jpg"
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="title-font-size">GOOD RECIPES</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click.native="$router.push('/')">Home</v-tab>
          <v-tab @click.native="$router.push('/fridge')">What is left in your fridge?</v-tab>
          </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import MyDrawer from './components/MyNavigationDrawer.vue';
import MyFooter from './components/MyFooter.vue';
  export default {
    data: () => { return { 
      drawer: false,
    }},
    components: {MyDrawer, MyFooter}
  }
</script>

<style>
  * {
    font-family: 'Roboto Condensed', sans-serif;
  }
  .v-app-bar-title__content {
    text-overflow: clip !important;
  }
  .title-font-size {
    font-size: 2.5rem !important;
    font-weight: bold;
  }
</style>