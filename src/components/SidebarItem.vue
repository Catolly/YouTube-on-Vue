<template>
	<li 
	:class="{'active' : isActive}"
	class="section-item">
		<a 
		:href="link"
		class="item-endpoint">
			<span 
			v-if="icon.match('.svg')"
			:style="`-webkit-mask-image: url(${icon})`"
			class="item-icon">
			</span>
			<img 
			v-else
			:src="icon"
			class="item-img">
			<span class="item-title">{{title}}</span>
			<div 
			v-if="newness"
			class="newness-dot"></div>
		</a>
	</li>
</template>
<script>
	export default {
		name: 'SidebarItem',
		props: {
			title: String,
			icon: String,
			link: {
				type: String,
				default: '#'
			},
			type: {
				type: String,
				default: ''
			},
			isActive: {
				type: Boolean,
				default: false 
			},
			newness: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../_colors.less';
@import '../_mixins.less';

.section-item {
	display: flex;
	align-items: center;

	&:hover {
		background-color: @section-item-bg-color;
	}
	&.active {
		font-weight: 500;
		background-color: @section-item-bg-color-active;
	}
	&.active:hover {
		background-color: @section-item-bg-color-active-hover;
	}
	&.active .item-icon {
		background-color: @section-item-icon-active;
	}
}

.item-endpoint {
	height: 40px;
	width: 100%;
	padding: 0 30px 0 24px;

	text-decoration: none;
	display: flex;
	align-items: center;
}

.item-title {
	font-size: 14px;
	color: @section-item-title;

	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 70%;
    display: inline-block;
    margin-right: -6px;
}

.item-icon,
.item-img {
	display: inline-block;

	width: 24px;
	height: 24px;
	margin-right: 24px;
}

.item-icon {
	background-color: @main-icon-color;
}

.item-img {
	.round();
}

.newness-dot {
	height: 4px;
	width: 4px;
	background-color: @section-item-newness-dot;
	margin-left: auto;
	margin-right: -8px;
	.round();
}

</style>