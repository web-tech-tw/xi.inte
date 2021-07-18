<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-avatar class="white mr-3">
          <v-img alt="Logo" src="@/assets/logo.png" width="39"/>
        </v-avatar>
        <v-app-bar-title>XI</v-app-bar-title>
      </div>
      <v-spacer/>
      <v-btn href="https://github.com/orgs/star-inc/projects?query=XI" text>
        <span class="mr-2">GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Intro @active="updateActive" v-if="active===0"/>
      <User v-if="active===1"/>
      <List v-if="active===2"/>
      <Chat v-if="active===3"/>
      <Manage v-if="active===4"/>
    </v-main>
  </v-app>
</template>

<script>
import Intro from './components/Intro';
import User from './components/User';
import List from './components/List';
import Chat from './components/Chat';
import Manage from './components/Manage';

export default {
  name: 'App',
  components: {
    Intro,
    User,
    List,
    Chat,
    Manage
  },
  data: () => ({
    active: 0
  }),
  methods: {
    updateActive(active) {
      this.active = active;
    }
  },
};
</script>
