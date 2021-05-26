<template>
  <v-card>
    <v-card-title class="headline  lighten-2">
      Reservation information
    </v-card-title>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="fname"
          :counter="20"
          :rules="nameRules"
          label="First name"
          required
        ></v-text-field>

        <v-text-field
          v-model="lname"
          :counter="20"
          :rules="nameRules"
          label="Last name"
          required
        ></v-text-field>

        

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="All info correct"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="ml-auto"
          @click="validate"
        >
          Make reservation
        </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ReservationForm",
  props: ["flightData"],
  data: () => ({
    valid: true,
    fname: "",
    lname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
    ],
    select: null,
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
