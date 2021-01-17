<template>
  <main-layout>
    <div id="page-manager">
      <div id="contents">
        <div id="primary">
          <video-item
          v-for="video in videos"
          :key="video.id"
          :id="video.id"
          :title="video.title"
          :preview="require('../assets/' + video.preview)"
          :length="video.length"
          :views="formatBigNumber(video.views)"
          :dateFromNow="video.dateFromNow"
          :channelTitle="video.channelTitle"
          :channelAvatar="require('../assets/' + video.channelAvatar)"
          :isChannelBadgeSupported="video.isChannelBadgeSupported">
        </video-item>
      </div>
    </div>
  </div>
</main-layout>
</template>

<script>
  import MainLayout from '@/layout/MainLayout'
  import VideoItem from '@/components/VideoItem'
  import videos from '@/data/videos'

  export default {
    name: 'Homepage',
    components: {
      MainLayout,
      VideoItem
    },
    data() {
      return {
        videos
      }
    },
    methods: {
        formatBigNumber: function(
                                number, 
                                ranksName=['тыс.', 'м', 'млрд']
                                ) {
        let str = number.toString()

        for (let ranks = 3; ranks > 0; ranks--) {
          let rank = ranks*3
          if (str.length > rank) {
            let integer = str.substring(0, str.length-rank)
            return integer + ' ' + ranksName[ranks-1]
          }
        }
        return str
      },
    }
  }
</script>

<style lang="less" scoped>
@import '../_colors.less';
@import '../_mixins.less';

.main-layout();

#page-manager {
  margin-left: 240px;
}

#contents {
  margin: 0 80px;
}

#primary {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

</style>
