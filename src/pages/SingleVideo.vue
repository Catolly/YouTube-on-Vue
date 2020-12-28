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
                {{
                  this.formateWithSpaces(video.views)
                }} просмотров
              </span>
              <span>{{video.uploadDate}}</span>
            </div>
            <div class="menu-container">
              <div class="menu">
                <button 
                @click="() => { 
                  if (!this.liked) {
                    this.video.likes++
                    if(this.disliked)
                      this.video.dislikes--
                    this.liked = true
                    this.disliked = false
                  }
                }"
                :class="{'active': this.liked}"
                class="toggle-like">
                  <span class="like-img-wrapper">
                    <span class="like-img"></span>
                  </span>
                  <span class="likes">
                    {{video.likes}}
                  </span>
                </button>
                <button 
                @click="() => { 
                  if (!this.disliked) {
                    this.video.dislikes++
                    if(this.liked)
                      this.video.likes--
                    this.disliked = true
                    this.liked = false
                  }
                }"
                :class="{'active': this.disliked}"
                class="toggle-dislike">
                  <span class="dislike-img-wrapper">
                    <span class="dislike-img"></span>
                  </span>
                  <span class="dislikes">
                    {{video.dislikes}}
                  </span> 
                </button>
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
      console.log(this.video)
    }
  },
  methods: {
    formateWithSpaces(str) {
      return String(str).split( /(?=(?:...)*$)/ )
                        .join(' ')
    }
  }
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

  .toggle-like,
  .toggle-dislike {
    display: flex;
    align-items: center;
  }

  .toggle-like {
    padding-right: 6px;

    &.active .like-img {
      background: @endpoint-color;
    }
    &.active .likes {
      color: @endpoint-color;
    }
  }

  .toggle-dislike {
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
    background: @button-toggled-off;

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

  .likes {

  }

  .dislikes {

  }
}

</style>
