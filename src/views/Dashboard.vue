<template>
  <v-list>
    <v-container v-show="!loaded">
      <v-row class="my-5" justify="center">
        <v-progress-circular color="primary" indeterminate/>
      </v-row>
    </v-container>
    <v-list-item
        v-for="(chat, index) in messagebox"
        :key="index"
        two-line
    >
      <v-list-item-content>
        <v-list-item-title>
          {{ chat.title }}
        </v-list-item-title>
        <v-list-item-action-text>
          {{ chat.summary }}
        </v-list-item-action-text>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "List",
  data: () => ({
    loaded: false,
    messagebox: [null, null]
  }),
}
</script>

<style scoped>

</style>
