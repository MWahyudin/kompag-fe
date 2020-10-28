<template>
  <div>
    <vs-tabs
      :position="isSmallerScreen ? 'top' : 'left'"
      class="tabs-shadow-none"
      id="profile-tabs"
      :key="isSmallerScreen"
    >
      <!-- GENERAL -->
      <vs-tab
        icon-pack="feather"
        icon="icon-user"
        :label="!isSmallerScreen ? 'General' : ''"
      >
        <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
          <vx-card no-shadow>
      <!-- Img Row -->
      <div class="flex flex-wrap items-center mb-base">
        <vs-avatar
          :src="activeUserInfo.photoURL"
          size="70px"
          class="mr-4 mb-4"
        />
        <div>
          <vs-button class="mr-4 sm:mb-0 mb-2">Upload photo</vs-button>
          <vs-button type="border" color="danger">Remove</vs-button>
          <p class="text-sm mt-2">Allowed JPG, GIF or PNG. Max size of 800kB</p>
        </div>
      </div>

      <!-- Info -->
      <vs-input
        class="w-full mb-base"
        label-placeholder="Nama"
        v-model="member.Nama"
      ></vs-input>
      <vs-input class="w-full mb-base" label-placeholder="Marga" v-model="name"
        >Hello</vs-input
      >
      <vs-input
        class="w-full"
        label-placeholder="Email"
        v-model="email"
      ></vs-input>

      <vs-alert
        icon-pack="feather"
        icon="icon-info"
        class="h-full my-4"
        color="warning"
      >
        <span
          >Your account is not verified.
          <a href="#" class="hover:underline">Resend Confirmation</a></span
        >
      </vs-alert>

      <vs-input
        class="w-full my-base"
        label-placeholder="Company"
        v-model="company"
      ></vs-input>

      <!-- Save & Reset Button -->
      <div class="flex flex-wrap items-center justify-end">
        <vs-button class="ml-auto mt-2">Save Changes</vs-button>
        <vs-button class="ml-4 mt-2" type="border" color="warning"
          >Reset</vs-button
        >
      </div>
    </vx-card>
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-lock"
        :label="!isSmallerScreen ? 'Change Password' : ''"
      >
        <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-change-password />
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-info"
        :label="!isSmallerScreen ? 'Info' : ''"
      >
        <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-info />
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-github"
        :label="!isSmallerScreen ? 'Social Links' : ''"
      >
        <div class="tab-social-links md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-social-links />
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-link-2"
        :label="!isSmallerScreen ? 'Connections' : ''"
      >
        <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-connections />
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-bell"
        :label="!isSmallerScreen ? 'Notifications' : ''"
      >
        <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-notifications />
        </div>
      </vs-tab>
    </vs-tabs>

  </div>
</template>

<script>
import UserSettingsGeneral from "./UserSettingsGeneral.vue";
import UserSettingsChangePassword from "./UserSettingsChangePassword.vue";
import UserSettingsInfo from "./UserSettingsInfo.vue";
import UserSettingsSocialLinks from "./UserSettingsSocialLinks.vue";
import UserSettingsConnections from "./UserSettingsConnections.vue";
import UserSettingsNotifications from "./UserSettingsNotifications.vue";
export default {
  components: {
    UserSettingsGeneral,
    UserSettingsChangePassword,
    UserSettingsInfo,
    UserSettingsSocialLinks,
    UserSettingsConnections,
    UserSettingsNotifications
  },
  // props: {
  //   member: {
  //     type: Object
  //   }
  // },
  data() {
    return {
      member: {},
      username: "",
      name: this.$store.state.AppActiveUser.displayName,
      email: "john@admin.com",
      company: "SnowMash Technologies Pvt Ltd"
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  //  created() {
  //   //  this.username = this.member.Nama;
  //  },
  created() {
    //  this.username = this.member.Nama;
    this.id = this.$route.params.id;
    // console.log(this.$route.params.idmember);
    // console.log(this.$route.params.id);
    if (this.id != null) {
      this.getMember();
    }
  },
  methods: {
    getMember() {
      this.$http
        .get(
          `http://apikompag.maxproitsolution.com/api/anggota/member/${this.id}`
        )
        .then(res => {
          console.log(res.data);
          this.member = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
