<template>
  <v-container grid-list-md text-xs-center style="margin-top: 48px;" >
    <v-layout row wrap>
      <v-flex xs12>
      Enter Hymn Number
      </v-flex>
      <v-flex v-for="i in numbers[0].row1" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-btn icon @click.native.stop="typeNumber(i)">
            <v-card-text class="px-0" style="font-size: 2em; font-weight: bold;">{{i}}</v-card-text>
          </v-btn>
        </v-card>
      </v-flex>
      <v-flex v-for="i in numbers[0].row2" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-btn icon @click.native.stop="typeNumber(i)">
            <v-card-text class="px-0" style="font-size: 2em; font-weight: bold;">{{i}}</v-card-text>
          </v-btn>
        </v-card>
      </v-flex>
      <v-flex v-for="i in numbers[0].row3" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-btn icon @click.native.stop="typeNumber(i)">
            <v-card-text class="px-0" style="font-size: 2em; font-weight: bold;">{{i}}</v-card-text>
          </v-btn>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card dark color="primary">
          <v-btn icon @click.native.stop="typeNumber()" >
            <v-icon style="font-size: 2em; font-weight: bold;">cancel</v-icon>
          </v-btn>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card dark color="primary">
          <v-btn icon @click.native.stop="typeNumber(0)">
            <v-card-text class="px-0" style="font-size: 2em; font-weight: bold;">0</v-card-text>
          </v-btn>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card dark color="primary">
          <v-btn icon @click.native.stop="backspaceNumber()">
            <v-icon style="font-size: 2em; font-weight: bold;">backspace</v-icon>
          </v-btn>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-btn icon @click.native.stop="gotoNumber()">
          <v-card-text class="px-0" style="font-size: 2em; font-weight: bold;">GO</v-card-text>
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import states from '../services/states/';
import sHymnal from './services/hymnals/'
// import router from '../router';

export default {
  data() {
    return {
      numbers: [
        {
          row1: [1, 2, 3],
          row2: [4, 5, 6],
          row3: [7, 8, 9],
        }],
    };
  },
  methods: {
    typeNumber(whichNumber) {
      console.log(`typed... ${whichNumber}`);
      console.log(states.currentHymnal());
    },
    backspaceNumber() {
    },
    gotoNumber() {
    },
  },
};
</script>

