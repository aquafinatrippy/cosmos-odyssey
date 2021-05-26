<template>
  <div>
    <Navbar />
    <v-container>
      <BookTravel />
    </v-container>
  </div>
</template>

<script>
import BookTravel from "@/components/BookTravel";
import Navbar from "@/components/Navbar";

export default {
  name: "Reservation",
  components: { BookTravel, Navbar },
};
</script>
