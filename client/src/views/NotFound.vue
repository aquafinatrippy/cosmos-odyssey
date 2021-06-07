<template>
  <div class="NotFound">
    <v-container>
      <v-layout row wrap class="cardLook ">
        <v-flex xs12>
          <v-card height="400" color="primary" flat class="pa-5">
            <div class="display-3 mt-5">Page not found.</div>
            <div class="white--text lighten-5">
              The page you are trying to get to never existed in this reality,
              or has migrated to a parallel universe.
            </div>
            <div class="paragraph-text mt-2">
              <br />
              <br />Try going back to home page and repeating your action. Or,
              contact helpdesk for support.
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.paragraph-text {
  font-size: 18px;
}
.cardLook {
  max-width: 80%;
  margin: 0 auto;
}
</style>
