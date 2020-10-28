<template>
  <vx-card no-shadow>

     <vs-input
      icon-pack="feather"
      icon="icon-mail"
      label="GitHub"
      icon-no-border
      class="w-full mb-base"
      label-placeholder="Pekerjaan"
      v-model="confirm_new_password"
    />
    <!-- <vs-input class="w-full mb-base" v-model="facebook" icon-pack="feather" icon="icon-facebook" label="GitHub" icon-no-border />
    <vs-input class="w-full mb-base" v-model="instagram" icon-pack="feather" icon="icon-instagram" label="GitHub" icon-no-border />
    <vs-input class="w-full mb-base" v-model="github" icon-pack="feather" icon="icon-github" label="GitHub" icon-no-border />
    <vs-input class="w-full mb-base" v-model="linkedin" icon-pack="feather" icon="icon-linkedin" label="GitHub" icon-no-border />
    <vs-input class="w-full mb-base" v-model="slack" icon-pack="feather" icon="icon-slack" label="GitHub" icon-no-border /> -->
 <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
        <vs-input
          class="w-full mb-base mr-12"
          label-placeholder="Kantor / perusahaan"
          v-model="new_password"
        />
        <vs-input
         icon-pack="feather"
          class="w-full mb-base mr-12"
          icon-no-border
          label-placeholder="Pendidikan"
          icon="icon-phone"
          placeholder="Pendidikan terakhir"
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
     <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
        <vs-input
          class="w-full mb-base mr-12"
          label-placeholder="Keahlian"
          v-model="new_password"
        />
        <vs-input
         icon-pack="feather"
          class="w-full mb-base mr-12"
          icon-no-border
          label-placeholder="Konsentrasi"
          icon="icon-phone"
          placeholder="Konsentrasi"
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
    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2">Save Changes</vs-button>
      <vs-button class="ml-4 mt-2" type="border" color="warning">Reset</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      twitter: "https://twitter.com/adoptionism744",
      facebook: "https://www.facebook.com/adoptionism664",
      instagram: "https://www.instagram.com/adopt-ionism744/",
      github: "https://github.com/madop818",
      linkedin: "https://codepen.io/adoptism243",
      slack: "@adoptionism744",
    }
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser
    },
  }
}
</script>
