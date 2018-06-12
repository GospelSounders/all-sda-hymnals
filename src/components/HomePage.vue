<template>
    <v-app>
    </v-app>
</template>

<script >
import states from '../services/states/'
import files from '../services/files/'
import router from '../router'
export default {
  data () {
    return {
      states
    }
  },
  mounted () {
  },
  created () {
  },
  methods: {
    openGithub () {
      window.open('https://github.com/disjfa/vuetify-sidebar-template');
    },
    gotoHymnNumber () {
      router.go('/HymnNumbers');
    }
  }
}
</script>
