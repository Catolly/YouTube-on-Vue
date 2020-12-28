<template>
	<div class="video-item">
		<router-link 
		:to="{name: 'SingleVideo', params: { id }}">
			<img :src="preview" class="video-img">
			<div class="overlays">
				<div class="video-length-overlay">
					<span class="video-length">
						{{length}}
					</span>
				</div>
			</div>
			<div class="details">
				<a :href="channelLink" class="avatar-link">
					<img 
					:src="channelAvatar" 
					:alt="channelTitle" 
					class="avatar-img">
				</a>
				<div class="meta">
					<h3 class="video-title">{{title}}</h3>
					<div class="channel-name">
						<a :href="channelLink" class="channel-title">
						{{channelTitle}}
						</a>
						<div 
						v-if="isChannelBadgeSupported"
						class="badge-supported">
							<span class="badge-supported-icon"></span>
						</div>
					</div>
					<div class="metadata-line">
						<span>
							{{views}} просмотров
						</span>
						<span>{{dateFromNow}}</span>
					</div>
				</div>
				<button class="menu"></button>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'VideoItem',
		props: {
			id: Number,
			preview: String,
			title: String,
			length: String,
			views: Number,
			dateFromNow: String,
			channelTitle: String,
			channelAvatar: String,
			channelLink: String,
			isChannelBadgeSupported: {
				type: Boolean,
				default: false
			},
		},
	}
</script>

<style lang="less" scoped>
@import '../_colors.less';
@import '../_mixins.less';

a {
	display: inline-block;
}

img {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}

h3 {
	font-size: 16px;
	font-weight: 500;
}

.video-item {
	margin: 0 8px 40px;
	font-size: 14px;
	color: @main-text-secondary;
}

.overlays {
	position: relative;
}

.video-length-overlay {
	display: inline-block;
	position: absolute;
	right: 0;
	bottom: 0;

	margin: 4px;
	margin-bottom: 7px;
	padding: 4px;
	padding-top: 2px;

	background: rgba(0, 0 , 0 ,.9);
}

.video-length {
	display: block;
	color: #fff;

	letter-spacing: .5px;
	font-weight: 500;
	font-size: 12px;
	line-height: 1em;
}

.details {
	display: flex;
	margin-top: 9px;
}

.avatar-img {
	.round();
	width: 36px;
	height: 36px;
	margin-right: 12px;
}

.meta {
	display: flex;
	flex-direction: column;
	flex: 1;
}

.video-title {
	line-height: 1.4em;
	overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
}

.channel-name {
	display: flex;
}

.channel-title,
.metadata-line {
	line-height: 1.3em;
}

.channel-title {
	color: @main-text-secondary;
}

.badge-supported {
	width: 13px;
	height: 13px;
	
	padding-left: 4px;
    padding-top: 3px;
}

.badge-supported-icon {
	display: inline-block;
	width: 100%;
	height: 100%;

	box-sizing: border-box;
	-webkit-mask-image: url('../assets/icons/Badge_Supported_Icon.svg');
	background: @main-icon-color;
}

.menu {
	min-width: 24px;
	height: 24px;
	-webkit-mask-image: url('../assets/icons/Video_Menu_Icon.svg');
	background: @main-icon-unfocused-color;

	visibility: hidden;
	cursor: pointer;

	&:hover {
		background: @main-icon-color;
	}
}

.video-item:hover .menu {
	visibility: visible;
}

</style>