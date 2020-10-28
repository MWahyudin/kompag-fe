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
                <p class="text-sm mt-2">
                  Allowed JPG, GIF or PNG. Max size of 800kB
                </p>
              </div>
            </div>
            <vs-alert
              icon-pack="feather"
              icon="icon-info"
              class="h-full my-4 mb-12"
              color="warning"
            >
              <span
                >Your account is not verified.
                <a href="#" class="hover:underline"
                  >Resend Confirmation</a
                ></span
              >
            </vs-alert>
            <!-- Info -->
            <vs-input
              class="w-full mb-base"
              label-placeholder="Nama"
              v-model="member.Nama"
            ></vs-input>
            <!-- <vs-input
              class="w-full mb-base"
              label-placeholder="Marga"
              v-model="member.Marga"
              ></vs-input
            > -->
            <div class="mt-2 mb-4">
              <label class="text-sm">Marga</label>
              <v-select
                v-model="member.Marga"
                :options="countryOptions"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
              />
            </div>
            <!-- <vs-input
              class="w-full"
              label-placeholder="Generasi"
              v-model="generasi"
            ></vs-input> -->

            <!-- <vs-input
              class="w-full my-base"
              label-placeholder="Parompuon"
              v-model="member.Parompuon"
            ></vs-input> -->
            <div class="mt-2 mb-4">
              <label class="text-sm">Generasi</label>
              <v-select
                v-model="generasi"
                :options="countryOptions"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
              />
            </div>
            <div class="mt-2 mb-4">
              <label class="text-sm">Parompuon</label>
              <v-select
                v-model="member.Parompuon"
                :options="countryOptions"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
              />
            </div>

            <!-- <vs-input
              class="w-full my-base"
              label-placeholder="Wilayah keanggotaan"
              v-model="member.Wilayah"
            ></vs-input> -->

            <!-- <vs-input
              class="w-full my-base"
              label-placeholder="Sektor"
              v-model="member.Sektor"
            ></vs-input> -->
            <div class="mt-2 mb-4">
              <label class="text-sm">Wilayah</label>
              <v-select
                v-model="member.Wilayah"
                :options="countryOptions"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
              />
            </div>
             <div class="mt-2 mb-8">
              <label class="text-sm">Sektor</label>
              <v-select
                v-model="member.Sektor"
                :options="countryOptions"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
              />
            </div>

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
        :label="!isSmallerScreen ? 'Identitas' : ''"
      >
        <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-change-password />
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-info"
        :label="!isSmallerScreen ? 'Kontak' : ''"
      >
        <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-info />
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-github"
        :label="!isSmallerScreen ? 'Info lain' : ''"
      >
        <div class="tab-social-links md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-social-links />
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-link-2"
        :label="!isSmallerScreen ? 'Anggota keluarga' : ''"
      >
        <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-connections />
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-bell"
        :label="!isSmallerScreen ? 'Riwayat' : ''"
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
import vSelect from 'vue-select'

export default {
  components: {
    UserSettingsGeneral,
    UserSettingsChangePassword,
    UserSettingsInfo,
    UserSettingsSocialLinks,
    UserSettingsConnections,
    UserSettingsNotifications,
    vSelect

  },
  // props: {
  //   member: {
  //     type: Object
  //   }
  // },
  data() {
    return {
      member: {},
      generasi: "generasi default",
      name: this.$store.state.AppActiveUser.displayName,
      email: "john@admin.com",
      company: "SnowMash Technologies Pvt Ltd",
       countryOptions: [
        { label: "Australia",  value: "australia"  },
        { label: "France",     value: "france"     },
        { label: "Germany",    value: "germany"    },
        { label: "India",      value: "india"      },
        { label: "Jordan",     value: "jordan"     },
        { label: "Morocco",    value: "morocco"    },
        { label: "Portuguese", value: "portuguese" },
        { label: "Syria",      value: "syria"      },
        { label: "USA",        value: "usa"        },
      ],
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
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
