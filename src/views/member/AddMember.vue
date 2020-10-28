<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="demo-basic-card">
    <div class="vx-row">
      <div
        class="vx-col w-full sm:w-1/2 sm:w-1/3 mb-base"
        v-for="member in card_1"
        :key="member.id_member"
      >
        <vx-card>
          <div slot="no-body">
            <img
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
              alt="content-img"
              class="responsive"
            />
          </div>
          <h5 class="mb-2">{{ member.nama }}</h5>
          <p class="text-grey">subtitle</p>
          <p class="text-grey">{{ member.tgl_registrasi }}</p>
          <div class="flex justify-between flex-wrap">
           <router-link :to="{ name: 'GeneralMember', params: {id: member.id_member} }">
              <vs-button

              class="mt-4 mr-2 shadow-lg"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              >Lihat detail</vs-button>
           </router-link>

            >
            <!-- <router-link to=""></router-link> -->
            <!-- <detail-member :id-member="member.id_member" v-if="sho"></detail-member> -->
            <!-- <vs-button class="mt-4" type="border" color="#b9b9b9"
              >View All</vs-button
            > -->
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { videoPlayer } from "vue-video-player";
import VxTimeline from "@/components/timeline/VxTimeline.vue";
// import "video.js/dist/video-js.css";
import DetailMember from './DetailMember'


export default {
  data() {
    return {
      showDetail: false,
      idMember: null,
      // card 1
      card_1: {},
      user: {
        id: null
      }
    };
  },
  components: {
    VuePerfectScrollbar,
    videoPlayer,
    VxTimeline,
    DetailMember
  },
  mounted() {
    // this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    // this.$http
    //   .get("http://apikompag.maxproitsolution.com/api/anggota/member")
    //   .then(response => {
    //     this.card_1 = response.data.data;
    //     // this.$Progress.finish();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  created() {
    // Card 1
    // this.$Progress.start();
    this.$http
      .get("http://apikompag.maxproitsolution.com/api/anggota/member")
      .then(response => {
        this.card_1 = response.data.data;
        // this.$Progress.finish();
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    // detail(idMembers) {
    //   this.idMember = idMembers
    //   console.log(this.idMember);
    //   // alert(idMember);
    //   this.$router.push({ path: '/setting-member', params: {id: this.idMember }})
    // }
  }
};
</script>

<style lang="scss">
#demo-basic-card {
  .overlay-card {
    .vx-card__collapsible-content {
      max-height: 485px;
    }
  }
  .responsive {
    width: 50%;
    height: auto;
    // margin-top: 50px;
    margin-left: 80px;
    // margin-bottom: 40px;

    // margin
    padding-top: 20px;
  }

  // .vx-row{}

  // .vx-row{
  //   // margin-top: 40px;
  // }

  // .img{
  //   margin: 0 auto;

  // }

  .chat-card-log {
    height: 360px;

    .chat-sent-msg {
      background-color: #f2f4f7 !important;
    }
  }

  .card-video {
    .video-js {
      height: 370px;
    }
  }
}
</style>
