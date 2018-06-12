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
          <v-list-group v-for="tlang in Languages" sub-group no-action value="false" v-model="tlang.isOpen" :key="tlang.lang" v-if=" hymnals.some(function(hymnal, index, array){if(hymnal.Language===tlang.lang && hymnal.isDownloaded===true) return true; else return false;}) === true">
            <v-list-tile slot="activator">
            <!-- <v-list-tile > -->
              <v-list-tile-title>{{tlang.lang}}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="hymnal of hymnals" :key="hymnal.id" @click.native.stop="gotoHymnal(hymnal.id)" v-if="hymnal.Language === tlang.lang && hymnal.isDownloaded === true">
              <v-list-tile-title v-text="hymnal.name"></v-list-tile-title>
            </v-list-tile>
             <v-divider></v-divider>
          </v-list-group>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Hymnals</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/ManageDownloads">
          <v-list-tile-action>
            <v-icon>fa-gear</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Downloads</v-list-tile-title>
        </v-list-tile>
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
      <v-menu transition="slide-x-transition" bottom right v-model="hymnalsShortopen">
        <v-btn  slot="activator" style="color:#fff; font-weight: bold;" >
          <v-subheader style="color:#fff; font-weight: bold; font-size: 1.0em;">{{currentHymnalName}} </v-subheader>
          <v-icon>fa-caret-square-o-down</v-icon>
          <!-- <icon name="caret-square-down"></icon> -->
        </v-btn>
        <v-list >
          <v-list-tile v-for="hymnal in hymnals" :key="hymnal.id" @click.native.stop="gotoHymnal(hymnal.id)" v-if="hymnal.isDownloaded===true">
            <v-list-tile-title>{{ hymnal.shortname }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn icon @click.native.stop="prevHymn()" style="color:green;" v-model="canGoBack" :disabled="!canGoBack">
        <v-icon>fa-arrow-circle-left</v-icon>
      </v-btn>
      <v-btn icon  to="/HymnNumbers" style="color:purple;">
        <v-subheader style="color:#fff; font-weight: bold; font-size: 1.0em;">{{currentHymnNumber}} </v-subheader>
      </v-btn>
      <v-btn icon @click.native.stop="nextHymn()" style="color:green;" v-model="canGoNext" :disabled="!canGoNext">
        <v-icon>fa-arrow-circle-right</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content style="padding: 0px 0px 0px 0px;margin-top: 48px;">
      <v-fade-transition mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </v-fade-transition>
    </v-content>
    <!-- Footer is in all pages -->
    <v-footer class="DarkCyan pa-3"  app color="#52BE80" style="background-color: Black;">
      <v-flex xs1>
        <v-btn icon @click.native.stop="prevHymn()" style="color:green;" :disabled="!canGoBack">
          <v-icon>fa-arrow-circle-left</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs2 >
        <v-btn icon @click.native.stop="nextHymn()" style="color:green;" :disabled="!canGoNext">
          <v-icon>fa-arrow-circle-right</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs2 >
        <v-btn icon style="color:purple;">
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
        <v-btn icon @click.native.stop="gotoHymnal(10)" style="color:green;">
          <v-icon>help</v-icon>
        </v-btn>
      </v-flex>
    </v-footer>
  </v-app>
</template>
<script>
import hymnals from './services/hymnals/';
import files from './services/files/'
import updates from './services/updates/'
import router from './router/'

export default {
  data () {
    return {
      name: 'App',
      users: [],
      drawer: false,
      hymnals: [],
      hymnalsopen: false,
      hymnalsShortopen: false,
      Languages: [],
      currentHymnalName: '',
      currentHymnNumber: '',
      canGoNext: false,
      canGoBack: false

    }
  },
  watch: {
    $route (to, from){
      let self = this
      // check if hymnals have been updated
      //alert()
      updates.checkforUpdates()
      if(updated === true) {
        updated = false
        //reload hymnals
        hymnals.hymnalInst.getHymnals(function(langs, hymnals, defaultHymnal, currentHymnal){        
          self.Languages = langs
          self.hymnals = hymnals
          currentHymnal = hymnals.hymnalInst.getcurrentHymnal()
          self.currentHymnalName = currentHymnal.shortname
          self.currentHymnNumber = currentHymnal.hymnNumber
          self.canGoNext = currentHymnal.canGoNext
          self.canGoBack = currentHymnal.canGoBack
        })
      }

      let currentHymnal = hymnals.hymnalInst.getcurrentHymnal()
      self.currentHymnalName = currentHymnal.shortname
      self.currentHymnNumber = currentHymnal.hymnNumber
      self.canGoNext = currentHymnal.canGoNext
      self.canGoBack = currentHymnal.canGoBack
    },
    drawer (val){
      let self = this
      hymnals.hymnalInst.getHymnals(function(langs, hymnals, defaultHymnal, currentHymnal){
        self.Languages = langs
        self.hymnals = hymnals
        currentHymnal = hymnals.hymnalInst.getcurrentHymnal()
        self.currentHymnalName = currentHymnal.shortname
        self.currentHymnNumber = currentHymnal.hymnNumber
        self.canGoNext = currentHymnal.canGoNext
        self.canGoBack = currentHymnal.canGoBack
      })
    },
    hymnalsShortopen (val){
      let self = this
      hymnals.hymnalInst.getHymnals(function(langs, hymnals, defaultHymnal, currentHymnal){
        self.Languages = langs
        self.hymnals = hymnals
        currentHymnal = hymnals.hymnalInst.getcurrentHymnal()
        self.currentHymnalName = currentHymnal.shortname
        self.currentHymnNumber = currentHymnal.hymnNumber
        self.canGoNext = currentHymnal.canGoNext
        self.canGoBack = currentHymnal.canGoBack
      })
    },
  },

  created () {
    let self = this
    hymnals.hymnalInst.deviceIsReady(function(ready){
      let hymnalsF = hymnals
      hymnals.hymnalInst.getHymnals(function(langs, hymnals, defaultHymnal, currentHymnal){        
        updates.scheduleUpdates(hymnalsF.hymnalInst.getInterval());
        self.Languages = langs
        self.hymnals = hymnals
        currentHymnal = hymnals.hymnalInst.getcurrentHymnal()
        self.currentHymnalName = currentHymnal.shortname
        self.currentHymnNumber = currentHymnal.hymnNumber
        self.canGoNext = currentHymnal.canGoNext
        self.canGoBack = currentHymnal.canGoBack
      })
    })
  },
  methods: {
    gotoHymnal (hymnalid) {
      let self = this
      self.drawer = false
      self.hymnalsShortopen = false
      hymnals.hymnalInst.gotoHymnal(hymnalid, function(currentHymnal){
        self.currentHymnalName = currentHymnal.shortname
        self.currentHymnNumber = currentHymnal.hymnNumber
        self.canGoNext = currentHymnal.canGoNext
        self.canGoBack = currentHymnal.canGoBack
        if(currentHymnal.Dialpad === false) {
          router.push('/Hymnal?num='+self.currentHymnNumber)
        }
        else {
          router.push('/HymnNumbers')
        }
      })

    },
    nextHymn() {
      let self = this
      hymnals.hymnalInst.gotoNumberinCurrentHymnal("next", false, function(currentHymnal){
        self.currentHymnalName = currentHymnal.shortname
        self.currentHymnNumber = currentHymnal.hymnNumber
        self.canGoNext = currentHymnal.canGoNext
        self.canGoBack = currentHymnal.canGoBack
        if(currentHymnal.Dialpad === false) router.push('/Hymnal?num='+self.currentHymnNumber)
        else router.push('/HymnNumbers')
      })

    },
    prevHymn() {
      let self = this
      hymnals.hymnalInst.gotoNumberinCurrentHymnal("prev", false, function(currentHymnal){
        self.currentHymnalName = currentHymnal.shortname
        self.currentHymnNumber = currentHymnal.hymnNumber
        self.canGoNext = currentHymnal.canGoNext
        self.canGoBack = currentHymnal.canGoBack
        if(currentHymnal.Dialpad === false) router.push('/Hymnal?num='+self.currentHymnNumber)
        else router.push('/HymnNumbers')
      })

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
