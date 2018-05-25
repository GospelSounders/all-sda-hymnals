<template>
  <v-container grid-list-md text-xs-center style="margin-top: 48px; white-space: pre-line;" >
    {{hymnText}}
  </v-container>
</template>

<script>
import states from '../services/states/';
import hymnals from '../services/hymnals/'
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
      hymnNumber: 0,
      hymnText: ''
    };
  },
  created () {
    let hymnal = hymnals.hymnalInst.getcurrentHymnal()
    this.hymnNumber = hymnal.hymnNumber
    this.hymnText = hymnals.hymnalInst.arrangeSingleSongWords(hymnal.text)
  },
  methods: {
  },
};
</script>

