<template>
  <!-- <v-container> -->

    <v-layout row>
      


    <v-flex xs12 sm6 offset-sm3>
      <v-expansion-panel>
      <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
        <div slot="header">
          <v-text-field
          name="searchinput"
          label="search"
          single-line
          prepend-icon="fa-search"
        ></v-text-field>
        </div>
        <div style="width: 100%;">
          <div style="width: 50%; float:left; padding-left: 15px;"><v-checkbox v-model="selected" label="Title" value="Title"></v-checkbox></div>
          <div style="width: 50%; float:right;"><v-checkbox v-model="selected" label="Words" value="Words"></v-checkbox></div>
        </div>
        <div style="width: 100%;">
          <div style="width: 50%; float:left; padding-left: 15px;"><v-checkbox v-model="selected" label="Author" value="Author"></v-checkbox></div>
          <div style="width: 50%; float:right;"><v-checkbox v-model="selected" label="Key" value="Key"></v-checkbox></div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
    List items will go here
      <v-card>
        <v-list three-line subheader style="background:-color:red;">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Manage Hymnals</v-list-tile-title>
              <v-list-tile-sub-title>Download new hymnals and delete old hymnals you no longer need. You need to be connected to the internet to see new hymnals</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn color="info" @click.native.stop="updateHymnals">update</v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-list>
      </v-card>
    


    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
        <div slot="header">
          <v-text-field
          name="searchinput"
          label="search"
          single-line
          prepend-icon="fa-search"
        ></v-text-field>
        </div>
        <v-layout row wrap>
            <v-flex xs12>
              <flex xs3 ><v-checkbox v-model="selected" label="Title" value="Title"></v-checkbox></flex>
              <flex xs3 ><v-checkbox v-model="selected" label="Titled" value="Titled"></v-checkbox></flex>
            </v-flex>
          </v-layout>
        <v-card>
          <v-card-text class="grey lighten-3">
          <p>{{ selected }}</p>
          <v-checkbox v-model="selected" label="Title" value="Title"></v-checkbox> <v-checkbox v-model="selected" label="Words" value="Words"></v-checkbox>
          <v-checkbox v-model="selected" label="Author" value="Author"></v-checkbox>
          <v-checkbox v-model="selected" label="Key" value="Key"></v-checkbox>
          <v-layout row wrap>
            <v-flex xs12>
              <flex xs3 ><v-checkbox v-model="selected" label="Title" value="Title"></v-checkbox></flex>
              <flex xs3 ><v-checkbox v-model="selected" label="Titled" value="Titled"></v-checkbox></flex>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
            <flex><v-checkbox v-model="selected" label="Title" value="Title"></v-checkbox></flex>
            </v-flex>
          </v-layout>
          </v-card-text>
        </v-card>

      </v-expansion-panel-content>
    </v-expansion-panel>

  <!-- </v-container> -->
</template>

<script>
import states from '../services/states/';
import hymnals from '../services/hymnals/'
import router from '../router/'

export default {
  data() {
    return {
      critea: {
        words: true,
        title: true,
        key: true,
        author: true
      },
      selected: []
    };
  },
  created () {
    hymnals.hymnalInst.resettypedNumber()
    this.typedNumber = null
  },
  methods: {
    typeNumber(whichNumber) {
      let self = this
      hymnals.hymnalInst.typeNumber(whichNumber, function(currentHymnal){
        self.typedNumber = hymnals.hymnalInst.gettypedNumber()
        if(currentHymnal.Dialpad === false) router.push('/Hymnal')
      })
    },
    backspaceNumber() {
      hymnals.hymnalInst.backspaceTypedNumber()
      this.typedNumber = hymnals.hymnalInst.gettypedNumber()
    },
    canceltypeNumber() {
      hymnals.hymnalInst.resettypedNumber()
      this.typedNumber = null
    },
    gotoNumber() {
      let self = this
      if(this.typedNumber !== null) {
        hymnals.hymnalInst.gotoNumberinCurrentHymnal("this", parseInt(this.typedNumber), function(){
          router.push('/Hymnal');
        })
      }
    },
  },
};
</script>


<style >

</style>