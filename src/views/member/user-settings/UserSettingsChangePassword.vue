<template>
  <vx-card no-shadow>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
        <vs-input
          class="w-full mb-base mr-12"
          label-placeholder="Gelar depan"
          v-model="new_password"
        />
        <vs-input
          class="w-full mb-base"
          label-placeholder="Gelar sarjana"
          v-model="confirm_new_password"
        />
      </vs-col>
    </vs-row>
    <vs-row w="12">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="6"
        offset="5"
      >
        <vs-input
          class="w-full mb-base mr-12 mt-2"
          label-placeholder="Nama lengkap"
          v-model="new_password"
        />
        <vs-input
          class="w-full mb-base mt-2"
          label-placeholder="Nama alias"
          v-model="confirm_new_password"
        />
      </vs-col>
    </vs-row>
    <vs-row w="12">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="6"
        offset="5"
      >
        <div class="mb-base">
          <label class="text-sm">Jenis kelamin</label>
          <div class="mt-2 mr-12">
            <vs-radio v-model="jenisKelamin" vs-value="laki-laki" class="mr-4"
              >laki-laki</vs-radio
            >
            <vs-radio v-model="jenisKelamin" vs-value="perempuan" class="mr-4"
              >Perempuan</vs-radio
            >
            <!-- <vs-radio v-model="jenisKelamin" vs-value="other">Other</vs-radio> -->
          </div>
        </div>

        <div class="mb-base ml-12">
          <label class="text-sm">Status</label>
          <div class="mt-2">
            <vs-radio v-model="status" vs-value="lajang" class="mr-4"
              >Lajang</vs-radio
            >
            <vs-radio v-model="status" vs-value="menikah" class="mr-4"
              >Menikah</vs-radio
            >
            <vs-radio v-model="status" vs-value="cerai" class="mr-4"
              >Cerai</vs-radio
            >
            <vs-radio v-model="status" vs-value="other">Other</vs-radio>
          </div>
        </div>
      </vs-col>
    </vs-row>

    <vs-row w="12">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="6"
        offset="5"
      >
        <vs-input
          class="w-full mb-base mr-12 mt-2"
          label-placeholder="Tempat Lahir"
          v-model="new_password"
        />
        <vs-input
          class="w-full mb-base mt-2"
          label-placeholder="Tanggal lahir"
          v-model="confirm_new_password"
        />
      </vs-col>
    </vs-row>
    <vs-row w="12">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="6"
        offset="5"
      >
        <vs-input
          class="w-full mb-base mr-12 mt-2"
          label-placeholder="Nomor KTP"
          v-model="new_password"
        />
        <vs-input
          class="w-full mb-base mt-2"
          label-placeholder="Nomor KK"
          v-model="confirm_new_password"
        />
      </vs-col>
    </vs-row>

    <!-- <vs-input class="w-full mb-base" label-placeholder="Old Password" v-model="old_password" />
    <vs-input class="w-full mb-base" label-placeholder="New Password" v-model="new_password" />
    <vs-input class="w-full mb-base" label-placeholder="Confirm Password" v-model="confirm_new_password" /> -->

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
export default {
  data() {
    return {
      status: "menikah",
      gender: "male",
      jenisKelamin: "laki-laki",
      old_password: "",
      new_password: "",
      confirm_new_password: ""
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
};
</script>
