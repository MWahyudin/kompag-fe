<template>
  <div>
    <vs-row>
      <!-- <h1>Detail id : {{ id }}</h1> -->
      <vs-col offset="2" w="8">
        offset = 8
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: 0,
    member: {}
  }),
  // mounted() {
  //   // console.log();
  //   this.id = this.$route.params.id;
  //   // console.log(this.id);
  //   console.log(this.$route.params.id);
  // }
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

<style></style>
