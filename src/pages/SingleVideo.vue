<template>
  <main-layout>
  	<div id="page-manager">
  	  <div id="contents">
        <div id="video"> 
          <img 
          :src="require('../assets/' + video.preview)"
          class="preview">
        </div>
        <div id="video-info-primary">
          <span class="tags">{{video.tags.join(' ')}}</span>
          <h1 class="title">{{video.title}}</h1>
          <div class="details">
            <div class="metadata-line">
              <span>
                {{this.formatWithSpaces(video.views)}} просмотров
              </span>
              <span>{{video.uploadDate}}</span>
            </div>
            <div class="menu-container">
              <div class="menu">
                <div class="like-container">
                    <button 
                    @click="like"
                    :class="{'active': liked}"
                    class="like-btn">
                      <span class="like-img-wrapper">
                        <span class="like-img"></span>
                      </span>
                      <span class="likes">
                        {{this.formatBigNumber(likes)}}
                      </span>
                    </button>
                    <button 
                    @click="dislike"
                    :class="{'active': disliked}"
                    class="dislike-btn">
                      <span class="dislike-img-wrapper">
                        <span class="dislike-img"></span>
                      </span>
                      <span class="dislikes">
                        {{this.formatBigNumber(dislikes)}}
                      </span> 
                    </button>
                    <div class="like-bar-wrapper">
                      <div
                      :class="{ active: this.liked || this.disliked }"
                      :style="{ width: this.likesRatio*100+'%' }"
                      class="like-bar"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
import videos from '@/data/videos'

export default {
  name: 'SingleVideo',
  components: {
    MainLayout
  },
  data() {
    return {
      videos,
      video: null,
      liked: false,
      disliked: false,
    }
  },
  created() {
    const video = videos.find(video => video.id == this.$route.params.id)
    if (video) {
      this.video = video
    }
  },
  methods: {
    formatWithSpaces: function(str) {
      return String(str).split( /(?=(?:...)*$)/ )
                        .join(' ')
    },
    like: function() {
      if (this.liked)
        this.liked = false
      else {
        this.liked = true
        this.disliked = false
      }
    },
    dislike: function() {
      if (this.disliked)
        this.disliked = false
      else {
        this.liked = false
        this.disliked = true
      }
    },
    formatBigNumber: function(number) {
      let str = number.toString()
      if (str.length > 6) {
        let integer = str.substring(0, str.length-6)
        let decimal = str.substring(str.length-6, str.length-5)
        return integer +
               (decimal == '0' ? '' : ',' + decimal) +
               ' М'
      }
      if (str.length > 3) {
        let integer = str.substring(0, str.length-3)
        let decimal = str.substring(str.length-3, str.length-2)
        return integer +
               (decimal == '0' ? '' : ',' + decimal) +
               ' ТЫС.'
      }
      return str
    },
  },
  computed: {
    likes: function() {
      return this.video.likes + this.liked
    },
    dislikes: function() {
      return this.video.dislikes + this.disliked
    },
    likesRatio: function() {
      if (this.likes + this.dislikes == 0) return 0.5 
      return this.likes / (this.likes + this.dislikes)
    },
  },
}

</script>

<style lang="less" scoped>
@import '../index.less';

span {
  display: inline-block;
}

.main-layout();

#page-manager {
  margin-left: 240px;
}

#contents {
  margin: 0 80px;
  width: 1280px;
}

#video {
  width: auto;
  height: 720px;
}

#video-info-primary {
  padding: 20px 0 8px;

  .title {
    font-weight: @fw-normal;
    line-height: 24px;
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 40px;
  }

  .menu {
    display: flex;
    flex-grow: 1;
  }

  .like-container {
    position: relative;
    display: flex;
  }

  .like-btn,
  .dislike-btn {
    display: flex;
    align-items: center;

    margin-right: 6px;
    cursor: pointer;
  }

  .like-btn {
    &.active .like-img {
      background: @endpoint-color;
    }
    &.active .likes {
      color: @endpoint-color;
    }
  }

  .dislike-btn {
    &.active .dislike-img {
      background: @endpoint-color;
    }
    &.active .dislikes {
      color: @endpoint-color;
    }
  }

  .like-img-wrapper,
  .dislike-img-wrapper {
    padding: 6px;
  }

  .like-img,
  .dislike-img {
    height: 24px;
    width: 24px;
    background: @main-secondary-light;

    &.active {
      background: @endpoint-color;
    }
  }
  
  .like-img {
    -webkit-mask-image: url('../assets/icons/Like_Icon.svg');
  }

  .dislike-img {
    -webkit-mask-image: url('../assets/icons/Dislike_Icon.svg');
  }

  .likes,
  .dislikes {
    font-size: @fz-2;
    font-weight: @fw-bold;
    color: @main-secondary;
  }

  .like-bar-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;

    background: @like-bar-empty;
  }

  .like-bar {
    width: 50%;
    height: 100%;
    background: @main-secondary-light;

    &.active {
      background: @endpoint-color;
    }
  }
}

</style>
