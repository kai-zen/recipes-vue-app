<template>
    <v-navigation-drawer 
    v-model="drawer"
    app>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            GOOD RECIPES
          </v-list-item-title>
          <v-list-item-subtitle>
            find the recipe here!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'MyDrawer',
        data() {
            return {
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                    { title: 'Photos', icon: 'mdi-image' },
                    { title: 'About', icon: 'mdi-help-box' },
                ],
                right: null
            }
        },
        props: ['drawer']
    }
</script>