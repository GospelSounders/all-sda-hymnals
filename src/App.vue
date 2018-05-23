<template>
  <v-app style="margin-top: 0px;">
    <v-navigation-drawer v-model="drawer" temporary fixed  dark class="indigo" style="margin-top: 48px;" height="100%">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>fa-home</v-icon>
            <!-- <icon name="home"></icon> -->
            <!-- <icon name="fa-flag"></icon> -->
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
         <v-divider></v-divider>
        <!-- Hymnals -->
        <v-list-group prepend-icon="fa-book" value="true" v-model="hymnalsopen">
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Hymnals</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-group v-for="tlang in Languages" sub-group no-action value="false" v-model="tlang.isOpen" :key="tlang.lang">
            <v-list-tile slot="activator">
            <!-- <v-list-tile > -->
              <v-list-tile-title>{{tlang.lang}}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="hymnal of hymnals" :key="hymnal.id" @click.stop="" v-if="hymnal.Language === tlang.lang ">
              <v-list-tile-title v-if="hymnal.Language === tlang.lang " v-text="hymnal.name"></v-list-tile-title>
            </v-list-tile>
             <v-divider></v-divider>
          </v-list-group>
        </v-list-group>
         <v-divider></v-divider>
        <v-list-tile to="/About">
          <v-list-tile-action>
            <!-- <icon name="info"></icon> -->
            <v-icon>fa-info</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar  dark style=" padding-top: 0px;" app  dense>
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <icon name="align-justify"></icon>
      </v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-menu transition="slide-x-transition" bottom right>
        <v-btn  slot="activator" style="color:#fff; font-weight: bold;" >
          <v-subheader style="color:#fff; font-weight: bold; font-size: 1.0em;"> </v-subheader>
          <v-icon>caret-square-o-down</v-icon>
          <!-- <icon name="caret-square-down"></icon> -->
        </v-btn>
        <v-list>
          <v-list-tile v-for="hymnal in hymnals" :key="hymnal.id">
            <v-list-tile-title>{{ hymnal.shortname }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn icon @click.native.stop="openGithub()" style="color:green;">
        <v-icon>fa-arrow-circle-left</v-icon>
      </v-btn>
      <v-btn icon @click.native.stop="openGithub()" style="color:purple;">
        <v-subheader style="color:#fff; font-weight: bold; font-size: 1.0em;"> </v-subheader>
      </v-btn>
      <v-btn icon @click.native.stop="openGithub()" style="color:green;">
        <v-icon>fa-arrow-circle-right</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content style="padding: 0px 0px 0px 0px;margin-top: 48px;">
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
    <!-- Footer is in all pages -->
    <v-footer class="DarkCyan pa-3"  app color="#52BE80" style="background-color: Black;">
      <v-flex xs1>
        <v-btn icon @click.native.stop="openGithub()" style="color:green;">
          <v-icon>fa-arrow-circle-left</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs2 >
        <v-btn icon @click.native.stop="openGithub()" style="color:green;">
          <v-icon>fa-arrow-circle-right</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs2 >
        <v-btn icon @click.native.stop="openGithub()" style="color:purple;">
          <v-icon>fa-search</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs2 >
        <v-btn icon style="color:purple;" to="/Settings">
          <v-icon>fa-gear</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs6 >
        <v-btn round fab color="success" to="/HymnNumbers">
          <v-icon>dialpad</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs2 >
        <v-btn icon @click.native.stop="openGithub()" style="color:green;">
          <v-icon>help</v-icon>
        </v-btn>
      </v-flex>
    </v-footer>
  </v-app>
</template>
<script>
// import states from './services/states/';
import files from './services/files/'

export default {
  data () {
    return {
      name: 'App',
      users: [],
      drawer: false,
      hymnals: [],
      hymnalsopen: false,
      Languages: []
    }
  },
  created () {
    let self = this
    // alert('created')
    files.checkStatus(function (response) {
      function loopCheckStatus (response) {
        if (response === true) {
          // read file
          files.openFile(function (err, data) {
            // alert('read file')
            if (err) {}
            // alert(data)
            data = JSON.parse(data)
            self.hymnals = data
            let i
            let languages = []
            // alert(253)
            // try{
            for (i in self.hymnals) {
              let hymnal = self.hymnals[i]
              let lang = hymnal.Language
              languages[lang] = lang
            }
            // }catch(e){
            //   alert(e)
            // }
            // alert(259)
            let langs = []
            for (let i in languages) {
              // alert(i)
              langs.push({lang: i, isOpen: false})
            }
            // alert(265)
            self.Languages = langs
            // alert("langes")
            // alert(langs)
            alert(self.Languages)
          }, 'index.json')
          return true
        }
        // wait for deviceReady
        files.checkStatus(function (response) {
          setTimeout(function () { loopCheckStatus(response) }, 500)
        })
      }
      loopCheckStatus(response)
    })
    // axios.get('http://jsonplaceholder.typicode.com/users').then(response => this.users = response.data)
  },
  methods: {
    openGithub () {
      window.open('https://github.com/disjfa/vuetify-sidebar-template')
    }
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="stylus">
  @import './assets/css/style.css';
</style>
