<template>
  <v-list>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Donate</v-list-tile-title>
    </v-list-tile>
    <v-divider></v-divider>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>flag</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Report Problems</v-list-tile-title>
    </v-list-tile>
    <v-divider></v-divider>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Send Feedback</v-list-tile-title>
    </v-list-tile>
    <v-divider></v-divider>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Update Hymnals</v-list-tile-title>
    </v-list-tile>
    <v-divider></v-divider>
  </v-list>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
