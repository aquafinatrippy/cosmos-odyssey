<template>
<div>
  <div class="planetList">
    <v-list rounded>
      <v-subheader>Select start route</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(destination, i) in destinations"
          :key="i"
        >
          
          <v-list-item-content>
            <v-list-item-title v-text="destination.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
  <solar-system />
</div>
</template>

<script>
import SolarSystem from '../components/SolarSystem.vue'

  export default {
    name: 'Home',
    data: () => ({
      selectedItem: 1,
      destinations: [
        {name: "Earth"},
        {name: "Mercury"},
        {name: "Venus"},
        {name: "Mars"},
        {name: "Jupiter"},
        {name: "Saturn"},
        {name: "Uranus"},
        {name: "Neptune"},
        
      ]
    }),
    components: {
      SolarSystem,
    },
  }
</script>
