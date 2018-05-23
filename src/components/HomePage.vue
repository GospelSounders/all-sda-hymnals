<template>
    <v-app>
      <textarea id="textArea">Somethings in appp</textarea>
        Somethings in appp


        <textarea id="textArea"></textarea>
        <!-- <v-list-tile
            v-for="hymnal of hymnals"
            v-bind:key="hymnal.id"
            @click.stop=""
          >
            <v-list-tile-title v-text="hymnal.name"></v-list-tile-title>
          </v-list-tile> -->
    </v-app>
</template>

<script >
import states from '../services/states/'
import files from '../services/files/'
import router from '../router'
// import axios from 'axios'
export default {
  data () {
    return {
      states
    }
  },
  mounted () {
    // let self = this
    // files.checkStatus().then(function (response) {
    //   function loopCheckStatus (response) {
    //     if (response === true) {
    //       // read file
    //       alert('retuned true')
    //       files.openFile(function (err, data) {
    //         if (err) {}
    //         // data = JSON.stringify(data)
    //         data = JSON.parse(data)
    //         alert(data)
    //         alert(self.hymnals)
    //         self.hymnals = data
    //         // let i
    //         // for(i in data) {
    //         //   self.hymnals = data
    //         //   alert(i)
    //         // }
    //         // work on the data... from whatever it is to json...
    //       }, 'index.json')
    //       return true
    //     }
    //     // wait for deviceReady
    //     files.checkStatus().then(function (response) {
    //       setTimeout(function () { loopCheckStatus(response); }, 500)
    //     })
    //   }
    //   loopCheckStatus(response)
    // })
  },
  created () {
    // let self = this
    // files.checkStatus(function (response) {
    //   function loopCheckStatus (response) {
    //     if (response === true) {
    //       // read file
    //       files.openFile(function (err, data) {
    //         if (err) {}
    //         data = JSON.parse(data)
    //         alert(data)
    //         self.hymnals = data
    //       }, 'index.json')
    //       return true
    //     }
    //     // wait for deviceReady
    //     files.checkStatus(function (response) {
    //       setTimeout(function () { loopCheckStatus(response); }, 500)
    //     })

    //   }
    //   loopCheckStatus(response)
    // })
    // axios.get('http://jsonplaceholder.typicode.com/users').then(response => this.users = response.data)
  },
  methods: {
    openGithub () {
      window.open('https://github.com/disjfa/vuetify-sidebar-template')
    },
    gotoHymnNumber () {
      // router.go('/HymnNumbers');
      console.log('clicked...')
      router.go('/HymnNumbers')
    }
  }
}
</script>
