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
			class="item-icon round">
			<span class="item-title">{{title}}</span>
			<div 
			v-if="newness"
			class="newness-dot round"></div>
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
@import '../colors.less';

.section-item {
	display: flex;
	align-items: center;
}

.section-item:hover {
	background-color: @section-item-bg-color;
}

.section-item.active {
	font-weight: 500;
	background-color: @section-item-bg-color-active;
}

.section-item.active:hover {
	background-color: @section-item-bg-color-active-hover;
}

.section-item.active .item-icon {
	background-color: @section-item-icon-active;
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

    max-width: 66%;
}

.item-icon {
	display: inline-block;

	width: 24px;
	height: 24px;
	margin-right: 24px;

	background-color: @main-icon-color;
}

.round {
	border-radius: 50%;
}

.newness-dot {
	height: 4px;
	width: 4px;
	max-width: 4px;
	background-color: @section-item-newness-dot;
	margin-left: auto;
}

</style>