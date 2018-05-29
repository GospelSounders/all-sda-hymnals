<template >
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list three-line subheader style="background:-color:red;">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Manage Hymnals</v-list-tile-title>
              <v-list-tile-sub-title>Download new hymnals and delete old hymnals you no longer need. You need to be connected to the internet to see new hymnals</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        
        <v-divider></v-divider>
          <v-list-group three-line style="background:-color:red;" v-for="tlang in Languages" value="false" v-model="tlang.isOpen" :key="tlang.lang">
            <v-list-tile slot="activator">
              <v-list-tile-title>{{tlang.lang}}</v-list-tile-title>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile v-for="hymnal of hymnals" :key="hymnal.id" v-if="hymnal.Language === tlang.lang ">
              <v-list-tile-action>
                <v-checkbox v-model="hymnal.isDownloaded"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
              <v-list-tile-title v-text="hymnal.name"></v-list-tile-title>
              <v-list-tile-sub-title v-text="hymnal.longName" style="color: gray;"></v-list-tile-sub-title>
            </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
          </v-list-group>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn color="info" @click.native.stop="updateHymnals">update</v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import hymnals from '../services/hymnals/';

export default {
  name: 'HelloWorld',
  data () {
    return {
      hymnals: [],
      Languages: []
    }
  },

  created () {
    let self = this
    hymnals.hymnalInst.checkHymnalsDb(function(){
      hymnals.hymnalInst.getHymnals_d(function(langs, hymnals, defaultHymnal){
        self.Languages = langs
        self.hymnals = hymnals
      })
    })
  },
  methods: {
    updateHymnals () {
      let self = this
      hymnals.hymnalInst.updateHymnals(self.hymnals, function(){
        hymnals.hymnalInst.getHymnals(function(langs, hymnals, defaultHymnal, currentHymnal){
          self.Languages = langs
          self.hymnals = hymnals
        })
      })
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
.list__group:after, .list__group:before {
    content: "";
    height: 1px;
    position: relative;
    transition: .3s cubic-bezier(.25,.8,.5,1);
    /* width: 100%; */
}
</style>
