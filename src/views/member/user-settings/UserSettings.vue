<template>
  <div>
    <h1>Nama : {{ member.Nama }}</h1>
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
          <user-settings-general />
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
  data() {
    return {
      member: {}
    };
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    }
  },
  created() {
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

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
