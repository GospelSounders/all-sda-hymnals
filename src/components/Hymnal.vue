<template>
  <!-- <v-subheader style="color:#000; font-weight: bold; font-size: 1.0em; padding: 0px 0px 0px 0px; text-align: center; background-color: red; margin:0px 0px 0px 0px;">TItle </v-subheader> -->
    
  <v-container grid-list-md style=" white-space: pre-line; font-weight: bold; text-align: left;" >
    <div style="color:#000; font-weight: bold; font-size: 2.0em; padding: 0px 0px 0px 0px; text-align: center; margin:0px 0px 0px 0px;">{{title}} </div>
    <div style="background-color: green; padding-right: 5px; padding-left: 5px;font-size: 0.5em;">
      <div style="width: 75%; text-align: left; float:left; padding-left: 5px;" >{{author}}</div>
      <div style="width: 25%; text-align: right; float:right; padding-right: 5px;">{{key}} </div>
    </div>
  
    <div style="padding: 0px 0px 0px 0px; font-size: 1.5em;">
      {{hymnText}}
    </div>
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
      hymnText: '',
      title: '',
      author: '',
      key: ''
    };
  },
  created () {
    let hymnal = hymnals.hymnalInst.getcurrentHymnal()
    this.hymnNumber = hymnal.hymnNumber
    let song = hymnals.hymnalInst.arrangeSingleSongWords(hymnal.text)
    this.hymnText = song.text || song
    this.title = song.title || ''
    this.author = song.author || ''
    this.key = song.key || ''
  },
  methods: {
  },
};
</script>

