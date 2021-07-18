<template>
  <v-container>
    <v-container class="chat-box">
      <v-container>
        <v-row class="my-5" justify="center">
          <v-progress-circular color="primary" indeterminate/>
        </v-row>
      </v-container>
      <v-list-item
          v-for="(item, key) in messages"
          :key="key"
      >
        <v-list-item-content>
          <v-list-item-action-text>
            {{ item.message.from }}
          </v-list-item-action-text>
          <v-container>
            {{ item.message }}
          </v-container>
          <v-list-item-action-text>
            {{ item.message.createdTime }}
          </v-list-item-action-text>
        </v-list-item-content>
      </v-list-item>
    </v-container>
    <v-footer fixed>
      <v-row class="mt-3 mx-3" d-flex justify="center">
        <v-textarea
            :placeholder="$t('chat.say')"
            append-outer-icon="mdi-send"
            dense
            filled
            height="5px"
            no-resize
            rounded
        />
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Chat"
}
</script>

<style scoped>

</style>
