<template>
  <vx-card no-shadow>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
        <vs-input
          class="w-full mb-base mr-12"
          label-placeholder="Kode negara"
          v-model="new_password"
        />
        <vs-input
         icon-pack="feather"
          class="w-full mb-base mr-12"
          icon-no-border
          label-placeholder="Nomor Handphone"
          icon="icon-phone"
          placeholder="No hp"
          icon-after="true" 
          v-model="confirm_new_password"
        />
        <!-- <vs-input
          icon-after="true"
          label-placeholder="icon-after"
          icon="mode_edit"
          placeholder="Nombre"
          v-model="value2"
        /> -->
      </vs-col>
    </vs-row>
    <vs-input
      icon-pack="feather"
      icon="icon-mail"
      label="GitHub"
      icon-no-border
      class="w-full mb-base"
      label-placeholder="Email"
      v-model="confirm_new_password"
    />
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
        <vs-input
          class="w-full mb-base mr-12"
          label-placeholder="Kota / Kabupaten"
          v-model="new_password"
        />
        <vs-input
          icon-pack="feather"
          icon="icon-map-pin"
          label="GitHub"
          icon-no-border
          class="w-full mb-base"
          label-placeholder="Kota lain"
          v-model="confirm_new_password"
        />
      </vs-col>
    </vs-row>
    <vs-textarea
      class="w-full mb-base mr-12"
      label="Alamat lengkap"
      v-model="new_password"
    />

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2">Save Changes</vs-button>
      <vs-button class="ml-4 mt-2" type="border" color="warning"
        >Reset</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import vSelect from "vue-select";

export default {
  components: {
    flatPickr,
    vSelect
  },
  data() {
    return {
      bio: this.$store.state.AppActiveUser.about,
      dob: null,
      country: "USA",
      lang_known: ["English", "Russian"],
      gender: "male",
      mobile: "",
      website: "",

      // Options
      countryOptions: [
        { label: "Australia", value: "australia" },
        { label: "France", value: "france" },
        { label: "Germany", value: "germany" },
        { label: "India", value: "india" },
        { label: "Jordan", value: "jordan" },
        { label: "Morocco", value: "morocco" },
        { label: "Portuguese", value: "portuguese" },
        { label: "Syria", value: "syria" },
        { label: "USA", value: "usa" }
      ],
      langOptions: [
        { label: "English", value: "english" },
        { label: "Spanish", value: "spanish" },
        { label: "French", value: "french" },
        { label: "Russian", value: "russian" },
        { label: "German", value: "german" },
        { label: "Arabic", value: "arabic" },
        { label: "Sanskrit", value: "sanskrit" }
      ]
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
};
</script>
