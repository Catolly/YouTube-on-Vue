<template>
	<li 
	class="section-item" 
	:class="{'active' : isActive}">
		<a 
		class="item-endpoint"
		:href="link">
			<span 
			class="item-icon"
			:style="`-webkit-mask-image: url(${icon})`">
			</span>
			<span class="item-title">{{title}}</span>
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
			isActive: {
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
	padding: 0 24px;

	text-decoration: none;
	display: flex;
	align-items: center;
}

.item-title {
	font-size: 14px;
	color: @section-item-title;
}

.item-icon {
	display: inline-block;

	width: 24px;
	height: 24px;
	margin-right: 24px;

	background-color: @main-icon-color;
}

.item-title {

}

</style>