<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    @click.native="$router.push(`/single-food/${food.id}`)"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="food.image"
    ></v-img>

    <v-card-title>{{food.title}}</v-card-title>
    <h1>{{food.calories}}</h1>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.3 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        <v-icon>mdi-clock-time-five</v-icon> • 45 mins
        <br/>
        <v-icon>mdi-account-supervisor</v-icon> • 4 servings
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="card-title">Ingredients :</v-card-title>

    <v-card-text>
      <v-chip-group
        column
      >
        <v-chip>onion</v-chip>
        <v-chip>egg</v-chip>
        <v-chip>tomato</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        @click="reserve"
      >
        More...
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'SingleCard',
    props: ['food']
  }
</script>

<style>
  .v-card__title{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .v-card{
    cursor: pointer;
  }
</style>